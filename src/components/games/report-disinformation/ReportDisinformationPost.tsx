import {
  RDPostTypes,
  ReportDisinformationGameDataTypes,
} from '../../../services/utils/types';
import PostImageViewer from './PostImageViewer';
import PostReportAccordion from './PostReportAccordion';

export default function ReportDisinformationPost({
  hasMedia,
  postAuthor,
  postCaption,
  postUploadedTime,
  mediaLink,
  isDisinformation,
  disinformationCategory,
  disinformationCategoryInfo,
}: RDPostTypes) {
  return (
    <div className='flex gap-4 px-4 py-2 border-b border-slate-300'>
      <div className='w-11 h-11 rounded-full shrink-0 bg-slate-300'>
        <img
          src={postAuthor.authorProfileImage}
          alt=''
          className='w-full h-full block rounded-full'
        />
      </div>

      <div className='flex flex-col gap-2'>
        <div className='flex gap-2   text-xs lg:text-sm text-slate-500'>
          <h4 className='font-semibold text-slate-900'>
            {postAuthor.authorName}
          </h4>
          <p>{postAuthor.authorUsername}</p>
          <span>•</span>
          <p>{postUploadedTime}</p>
        </div>

        <div className='text-xs lg:text-sm text-slate-800'>{postCaption}</div>

        {hasMedia && <PostImageViewer mediaLink={mediaLink!} />}

        <PostReportAccordion
          disinformationCategoryId={disinformationCategory!}
          isDisinformation={isDisinformation}
          disinformationCategoryInfo={disinformationCategoryInfo!}
        />
      </div>
    </div>
  );
}
