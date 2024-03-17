import {useState} from 'react';
import {motion} from 'framer-motion';
import {twMerge} from 'tailwind-merge';

import {
  DisinformationInfoTypes,
  DisinformationTypes,
} from '../../../services/utils/types';
import {createPortal} from 'react-dom';
import Icons from '../../ui/Icons';

const disinformationCategories: DisinformationTypes = [
  {id: 1, label: 'Manipulasi video/gambar'},
  {id: 2, label: 'Impersonasi'},
  {id: 3, label: 'Berita bohong'},
  {id: 4, label: 'Sumber berita tidak terpercaya'},
];

interface PostReportAccordion {
  isDisinformation: boolean;
  disinformationCategoryId: string;
  disinformationCategoryInfo: DisinformationInfoTypes;
  index: number;
  reducePlayerLife: (x: number) => void;
  setUserCorrectAnswerCount: React.Dispatch<React.SetStateAction<number>>;
}

export default function PostReportAccordion({
  disinformationCategoryId,
  isDisinformation,
  disinformationCategoryInfo,
  index,
  reducePlayerLife,
  setUserCorrectAnswerCount,
}: PostReportAccordion) {
  const [selectedCategories, setSelectedCategories] = useState<number[]>([]);
  const [showReportCategories, setShowReportCategories] =
    useState<boolean>(false);
  const [isEditable, setEditable] = useState<boolean>(true);

  function toggleSelectedCategory(categoryId: number) {
    // Removes the categoryId from selectedCategories if its already "selected". Else add it.
    const isCategoryAlreadySelected = selectedCategories.includes(categoryId);
    if (isCategoryAlreadySelected) {
      setSelectedCategories((selectedCtgr) =>
        [...selectedCtgr]
          .filter((category) => category !== categoryId)
          .sort((a, b) => a - b)
      );
    } else {
      setSelectedCategories((selectedCtgr) =>
        [...selectedCtgr, categoryId].sort((a, b) => a - b)
      );
    }
  }

  return (
    <div>
      {isEditable && (
        <button
          className='w-6 h-6 bg-red-600 ml-auto mb-1 grid place-items-center text-red-100'
          onClick={() => setShowReportCategories(!showReportCategories)}
        >
          <Icons.Report className='w-5 h-5' fill='rgb(254, 226, 226)' />
        </button>
      )}

      <motion.div
        animate={{height: showReportCategories ? 'auto' : '0px'}}
        initial={false}
        className='overflow-hidden relative bg-slate-400/30'
      >
        <div className='p-2'>
          <p className='text-xs font-semibold text-slate-50'>
            Pilih kategory disinformasi yang cocok:
          </p>

          <div className='flex flex-wrap gap-2 pt-2'>
            {disinformationCategories.map((category) => (
              <PostReportCheckbox
                key={category.id}
                id={category.id}
                label={category.label}
                isSelected={selectedCategories.includes(category.id)}
                toggleCategorySelection={toggleSelectedCategory}
                disabled={isEditable}
              />
            ))}
          </div>

          <PostReportResult
            disinformationCategoryId={disinformationCategoryId}
            disinformationCategoryInfo={disinformationCategoryInfo}
            isDisinformation={isDisinformation}
            disabled={!selectedCategories.length}
            selectedCategories={selectedCategories}
            setShowCategory={setShowReportCategories}
            setEditable={setEditable}
            index={index}
            reducePlayerLife={reducePlayerLife}
            setUserCorrectAnswerCount={setUserCorrectAnswerCount}
          />
        </div>
      </motion.div>
    </div>
  );
}

interface PostReportResult extends PostReportAccordion {
  disabled: boolean;
  selectedCategories: number[];
  setShowCategory: React.Dispatch<React.SetStateAction<boolean>>;
  setEditable: React.Dispatch<React.SetStateAction<boolean>>;
  reducePlayerLife: (amount: number) => void;
}

function PostReportResult({
  disabled,
  disinformationCategoryId,
  disinformationCategoryInfo,
  selectedCategories,
  setShowCategory,
  setEditable,
  index,
  reducePlayerLife,
  setUserCorrectAnswerCount,
  isDisinformation,
}: PostReportResult) {
  const [report, setReport] = useState<any>([]);

  function checkReports() {
    setShowCategory(false);
    setEditable(false);
    let wrongAnswerCount: number = 0;
    let correctAnswerCount: number = 0;

    let disinformationCategoryIdMap: any;
    try {
      disinformationCategoryIdMap = disinformationCategoryId.split('-');
    } catch {
      disinformationCategoryIdMap = [];
    }

    const report = disinformationCategoryInfo?.map((category) => {
      /* 
        We will use "selected" and "isCorrect" to determine the player scores;
      */
      const selected: boolean = selectedCategories.includes(category.id);
      const isCorrect: boolean = disinformationCategoryIdMap.includes(
        String(category.id)
      );

      // increese when player selected the wrong category
      if (selected && !isCorrect) wrongAnswerCount += 1;
      // increse when player selected the correct category
      if (selected && isCorrect) correctAnswerCount += 1;

      return {...category, selected, isCorrect};
    });

    const sortedReport = report.sort(
      (a: any, b: any) => a.selected - b.selected - (b.isCorrect - a.isCorrect)
    );

    // reduce the player life with n amount of wrong answer made
    setUserCorrectAnswerCount((prev) => prev + correctAnswerCount);
    if (wrongAnswerCount > 0) reducePlayerLife(wrongAnswerCount);

    setReport(sortedReport);
  }

  return (
    <>
      <button
        onClick={checkReports}
        disabled={disabled}
        className='block p-1 px-2 ml-auto font-semibold mt-4 bg-red-500 text-red-900 text-sm rounded-sm border border-red-600 hover:bg-red-400 outline-none transition-colors disabled:bg-slate-200 disabled:border-slate-300 disabled:text-slate-600'
      >
        Laporkan
      </button>

      {Boolean(report.length) &&
        createPortal(
          <div className='bg-slate-50/30 p-4 relative z-50 flex flex-col gap-3 w-full'>
            <p className='text-sm text-slate-50'>
              Berikut adalah hasil analisa jawaban kamu:
            </p>

            <div className='flex flex-col gap-2'>
              {report.map((report: any) => (
                <ReportResultCard key={report.id} {...report} />
              ))}
            </div>
          </div>,
          document.getElementById('report__' + index) as
            | Element
            | DocumentFragment
        )}
    </>
  );
}

interface ReportResultCard {
  selected: boolean;
  isCorrect: boolean;
  label: string;
  reason: string;
}

function ReportResultCard({
  isCorrect,
  label,
  reason,
  selected,
}: ReportResultCard) {
  const cardColor =
    selected && isCorrect
      ? 'bg-green-600/70'
      : selected && !isCorrect
      ? 'bg-red-500'
      : 'bg-slate-200';

  return (
    <div className={twMerge('p-2 sm:w-max h-max flex gap-2', cardColor)}>
      <div className='flex flex-col gap-1'>
        <ReportCardHeader isCorrect={isCorrect} selected={selected} />

        <h4 className='font-bold mb-1 text-sm pl-1'>{label}</h4>

        {selected && isCorrect && (
          <span className='empty:hidden text-xs'>{reason}</span>
        )}

        {!isCorrect && selected && (
          <span className='text-xs'>
            Postingan ini tidak termasuk dalam kategori disinformasi ini.
          </span>
        )}
      </div>
    </div>
  );
}

type ReportCardHeaderProps = {
  isCorrect: boolean;
  selected: boolean;
};

function ReportCardHeader({isCorrect, selected}: ReportCardHeaderProps) {
  return (
    <>
      {selected && isCorrect && (
        <span className='text-xs'>Kategori yang kamu pilih benar!</span>
      )}

      {selected && !isCorrect && (
        <span className='text-xs'>Kamu memilih kategori yang salah:</span>
      )}
    </>
  );
}

interface PostReportCheckbox {
  id: number;
  label: string;
  isSelected: boolean;
  toggleCategorySelection: (categoryId: number) => void;
  disabled: boolean;
}

function PostReportCheckbox({
  id,
  label,
  isSelected,
  toggleCategorySelection,
  disabled,
}: PostReportCheckbox) {
  return (
    <button
      disabled={!disabled}
      onClick={() => toggleCategorySelection(id)}
      className={twMerge(
        'block bg-slate-200 shadow-sm font-semibold text-xs sm:text-sm text-left p-1 px-2 border-none transition-colors outline-none',
        isSelected
          ? 'bg-primary text-blue-50 hover:bg-primary/50'
          : 'bg-slate-200/50 text-slate-800 hover:bg-slate-100/50'
      )}
    >
      {label}
    </button>
  );
}
