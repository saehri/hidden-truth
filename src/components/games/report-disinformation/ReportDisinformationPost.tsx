import {RDPostTypes} from '../../../services/utils/types';
import PostImageViewer from './PostImageViewer';
import PostReportAccordion from './PostReportAccordion';

interface PostProps extends RDPostTypes {
  index: number;
  reducePlayerLife: (x: number) => void;
  setUserCorrectAnswerCount: React.Dispatch<React.SetStateAction<number>>;
}

export default function ReportDisinformationPost({
  hasMedia,
  postAuthor,
  postCaption,
  postUploadedTime,
  mediaLink,
  isDisinformation,
  disinformationCategory,
  disinformationCategoryInfo,
  index,
  reducePlayerLife,
  setUserCorrectAnswerCount,
}: PostProps) {
  return (
    <div className='p-4 bg-slate-600/30 relative'>
      <div className='text-xs mb-3 bg-red-600 w-max px-2'>POST - 00{index}</div>

      <div className='grid grid-cols-[max-content,_1fr] gap-4 mb-4'>
        <div className='w-11 h-11 shrink-0 bg-slate-300'>
          {postAuthor.authorProfileImage.length > 0 && (
            <img
              src={postAuthor.authorProfileImage}
              alt=''
              className='w-full h-full block'
            />
          )}
        </div>

        <div className='flex flex-col gap-2'>
          <div className='flex gap-2 text-sm text-slate-400'>
            <h4 className='font-semibold text-slate-50'>
              {postAuthor.authorName}
            </h4>
            <p>{postAuthor.authorUsername}</p>

            <span>•</span>

            <p>{postUploadedTime}</p>
          </div>

          <div className='text-sm text-slate-200'>{postCaption}</div>

          {hasMedia && <PostImageViewer mediaLink={mediaLink!} />}
        </div>
      </div>

      <PostReportAccordion
        disinformationCategoryId={disinformationCategory!}
        isDisinformation={isDisinformation}
        disinformationCategoryInfo={disinformationCategoryInfo!}
        index={index}
        reducePlayerLife={reducePlayerLife}
        setUserCorrectAnswerCount={setUserCorrectAnswerCount}
      />

      <div id={'report__' + index}></div>

      {/* DECORATION */}
      <Block />
    </div>
  );
}

function Block() {
  return (
    <>
      <span className='absolute w-5 h-5 top-0 left-0 border-t border-l border-slate-50/50' />
      <span className='absolute w-5 h-5 top-0 right-0 border-t border-r border-slate-50/50' />
      <span className='absolute w-5 h-5 bottom-0 left-0 border-b border-l border-slate-50/50' />
      <span className='absolute w-5 h-5 bottom-0 right-0 border-b border-r border-slate-50/50' />
    </>
  );
}
