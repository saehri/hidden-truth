import {useState} from 'react';
import {motion} from 'framer-motion';
import {twMerge} from 'tailwind-merge';

import {
  DisinformationInfoTypes,
  DisinformationTypes,
} from '../../../services/utils/types';
import {createPortal} from 'react-dom';

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
}

export default function PostReportAccordion({
  disinformationCategoryId,
  isDisinformation,
  disinformationCategoryInfo,
}: PostReportAccordion) {
  const [selectedCategories, setSelectedCategories] = useState<number[]>([]);
  const [showReportCategories, setShowReportCategories] =
    useState<boolean>(false);

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
      <button
        className='w-6 h-6 rounded-full bg-slate-300 ml-auto block'
        onClick={() => setShowReportCategories(!showReportCategories)}
      ></button>

      <motion.div
        animate={{height: showReportCategories ? 'auto' : '0px'}}
        initial={false}
        className='overflow-hidden relative'
      >
        <div>
          <div className='flex flex-wrap gap-2 pt-2'>
            <p className='text-xs font-semibold text-slate-800'>
              Pilih kategory disinformasi yang cocok:
            </p>

            {disinformationCategories.map((category) => (
              <PostReportCheckbox
                key={category.id}
                id={category.id}
                label={category.label}
                isSelected={selectedCategories.includes(category.id)}
                toggleCategorySelection={toggleSelectedCategory}
              />
            ))}
          </div>

          <PostReportResult
            disinformationCategoryId={disinformationCategoryId}
            disinformationCategoryInfo={disinformationCategoryInfo}
            isDisinformation={isDisinformation}
            disabled={!selectedCategories.length}
            selectedCategories={selectedCategories}
          />
        </div>
      </motion.div>
    </div>
  );
}

interface PostReportResult extends PostReportAccordion {
  disabled: boolean;
  selectedCategories: number[];
}

function PostReportResult({
  disabled,
  disinformationCategoryId,
  disinformationCategoryInfo,
  selectedCategories,
}: PostReportResult) {
  const [report, setReport] = useState<any>([]);

  function checkReports() {
    // if (!isDisinformation) {
    //   // If the player has selected any categories then deducts their score by the amount of selectedCategories
    //   console.log('this is a fact');
    //   setReport(disinformationCategoryInfo.map(category => ({...category, selected:})));
    //   return;
    // }

    const userAnswer = selectedCategories.join('-');
    if (userAnswer === disinformationCategoryId) {
      console.log('all correct');
    }

    let disinformationCategoryIdMap: any;
    try {
      disinformationCategoryIdMap = disinformationCategoryId.split('-');
    } catch {
      disinformationCategoryIdMap = [];
    }

    const report = disinformationCategoryInfo?.map((category) => {
      /* 
        We will use "selected" and "isCorrect" to determine the player scores;
        if selected and isCorrect -> playerScore++
        if not selected and isCorrect -> playerScore--
        if not selected and not isCorrect -> playerScore
      */
      const selected: boolean = selectedCategories.includes(category.id);

      const isCorrect: boolean = disinformationCategoryIdMap.includes(
        String(category.id)
      );

      return {...category, selected, isCorrect};
    });

    setReport(report);
  }

  return (
    <>
      <button
        onClick={checkReports}
        disabled={disabled}
        className='block p-1 px-2 ml-auto mt-2 bg-red-500 text-red-900 text-xs rounded-sm border border-red-600 hover:bg-red-400 outline-none transition-colors disabled:bg-slate-200 disabled:border-slate-300 disabled:text-slate-400'
      >
        Laporkan
      </button>

      {Boolean(report.length) &&
        createPortal(
          <div className='fixed top-0 left-0 w-full h-full grid place-items-center p-4'>
            <button
              onClick={() => setReport([])}
              className='absolute top-0 left-0 w-full h-full bg-slate-950/80 lg:backdrop-blur-sm -z-10'
            >
              <span className='sr-only'>Close</span>
            </button>

            <div className='bg-slate-50 p-4 rounded-lg relative z-50 flex flex-col gap-3 w-full max-w-96'>
              <p>Kamu berhasil memilih m dari n opsi.</p>

              {report.map((report: any) => (
                <ReportResultCard key={report.id} {...report} />
              ))}
            </div>
          </div>,
          document.getElementById('emtris__dialog') as
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
      ? 'bg-green-600 border border-green-700'
      : selected && !isCorrect
      ? 'bg-red-500 border border-red-600'
      : !selected && isCorrect
      ? 'bg-red-500 border border-red-600'
      : 'bg-slate-200 border border-slate-300';

  const isCorrectAnswer = selected && isCorrect;

  return (
    <div className={twMerge('p-2 w-full rounded-md flex gap-2', cardColor)}>
      <div className='w-4 h-4 rounded-full bg-yellow-500'></div>

      <div className='flex flex-col gap-2'>
        {isCorrectAnswer && <span>You got this one right!</span>}
        {!selected && isCorrect && <span>Kamu tidak memilih opsi ini.</span>}
        <h4 className='font-semibold'>{label}</h4>
        <span className='empty:hidden'>{reason}</span>
      </div>
    </div>
  );
}

interface PostReportCheckbox {
  id: number;
  label: string;
  isSelected: boolean;
  toggleCategorySelection: (categoryId: number) => void;
}

function PostReportCheckbox({
  id,
  label,
  isSelected,
  toggleCategorySelection,
}: PostReportCheckbox) {
  return (
    <button
      onClick={() => toggleCategorySelection(id)}
      className={twMerge(
        'block bg-slate-200 rounded-full shadow-sm text-xs p-1 px-2 border transition-colors outline-none',
        isSelected
          ? 'bg-blue-300 border-blue-600 text-blue-950 hover:bg-blue-200'
          : 'bg-slate-200 border-slate-400 text-slate-800 hover:bg-slate-100'
      )}
    >
      {label}
    </button>
  );
}
