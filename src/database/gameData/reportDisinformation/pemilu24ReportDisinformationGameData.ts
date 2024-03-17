import {ReportDisinformationGameDataTypes} from '../../../services/utils/types';
import {reportDisinformationRewardsList} from '../../storyline/specialStoryline/SSPemilu24';

const pemilu24ReportDisinformationGameData: Record<
  string,
  ReportDisinformationGameDataTypes
> = {
  'PEMILU24-RD-C1-2': {
    hasTutorial: true,
    rewards: reportDisinformationRewardsList.game1,
    totalDisinformationCategory: 3,
    data: [
      {
        postId: 1,
        postCaption: 'Pilih 2,3',
        isDisinformation: true,
        disinformationCategory: '2-3',
        postAuthor: {
          authorName: 'Nana',
          authorProfileImage:
            'https://assets-global.website-files.com/6350fb37e2d185647cd723a2/64c0cd0fd61a175666ee0e41_090b38a64e7faeb41473fe34e7859e69.png',
          authorUsername: '@nanabot',
          authorBio:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil iste hic in, odio voluptate molestiae.',
          followerCount: 120,
          followingCount: 80,
        },
        postUploadedTime: '16m',
        hasMedia: false,
        disinformationCategoryInfo: [
          {id: 1, label: 'Manipulasi video/gambar'},
          {id: 2, label: 'Impersonasi', reason: 'Niru orang'},
          {id: 3, label: 'Berita bohong', reason: 'Bohong banget'},
          {id: 4, label: 'Sumber berita tidak terpercaya'},
        ],
      },
      {
        postId: 2,
        postCaption: 'Pilih 1',
        isDisinformation: true,
        disinformationCategory: '1',
        postAuthor: {
          authorName: 'Nana',
          authorProfileImage:
            'https://assets-global.website-files.com/6350fb37e2d185647cd723a2/64c0cd0fd61a175666ee0e41_090b38a64e7faeb41473fe34e7859e69.png',
          authorUsername: '@nanabot',
          authorBio:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil iste hic in, odio voluptate molestiae.',
          followerCount: 120,
          followingCount: 80,
        },
        postUploadedTime: '1h',
        hasMedia: true,
        mediaLink:
          'https://www.blibli.com/friends-backend/wp-content/uploads/2021/06/92662989_2642247046101392_8120274959053645404_n1-951x1024-1.jpeg',
        disinformationCategoryInfo: [
          {id: 1, label: 'Manipulasi video/gambar', reason: 'WTF'},
          {id: 2, label: 'Impersonasi'},
          {id: 3, label: 'Berita bohong'},
          {id: 4, label: 'Sumber berita tidak terpercaya'},
        ],
      },
      {
        postId: 3,
        postCaption: 'Pilih 1,2',
        isDisinformation: false,
        postAuthor: {
          authorName: 'Nana',
          authorProfileImage:
            'https://assets-global.website-files.com/6350fb37e2d185647cd723a2/64c0cd0fd61a175666ee0e41_090b38a64e7faeb41473fe34e7859e69.png',
          authorUsername: '@nanabot',
          authorBio:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil iste hic in, odio voluptate molestiae.',
          followerCount: 120,
          followingCount: 80,
        },
        postUploadedTime: '12m',
        hasMedia: false,
        disinformationCategoryInfo: [
          {id: 1, label: 'Manipulasi video/gambar'},
          {id: 2, label: 'Impersonasi'},
          {id: 3, label: 'Berita bohong'},
          {id: 4, label: 'Sumber berita tidak terpercaya'},
        ],
      },
      {
        postId: 4,
        postCaption: 'Pilih 1,2',
        isDisinformation: false,
        postAuthor: {
          authorName: 'Nana',
          authorProfileImage:
            'https://assets-global.website-files.com/6350fb37e2d185647cd723a2/64c0cd0fd61a175666ee0e41_090b38a64e7faeb41473fe34e7859e69.png',
          authorUsername: '@nanabot',
          authorBio:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil iste hic in, odio voluptate molestiae.',
          followerCount: 120,
          followingCount: 80,
        },
        postUploadedTime: '12m',
        hasMedia: false,
        disinformationCategoryInfo: [
          {id: 1, label: 'Manipulasi video/gambar'},
          {id: 2, label: 'Impersonasi'},
          {id: 3, label: 'Berita bohong'},
          {id: 4, label: 'Sumber berita tidak terpercaya'},
        ],
      },
      {
        postId: 5,
        postCaption: 'Pilih 1,2',
        isDisinformation: false,
        postAuthor: {
          authorName: 'Nana',
          authorProfileImage:
            'https://assets-global.website-files.com/6350fb37e2d185647cd723a2/64c0cd0fd61a175666ee0e41_090b38a64e7faeb41473fe34e7859e69.png',
          authorUsername: '@nanabot',
          authorBio:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil iste hic in, odio voluptate molestiae.',
          followerCount: 120,
          followingCount: 80,
        },
        postUploadedTime: '12m',
        hasMedia: false,
        disinformationCategoryInfo: [
          {id: 1, label: 'Manipulasi video/gambar'},
          {id: 2, label: 'Impersonasi'},
          {id: 3, label: 'Berita bohong'},
          {id: 4, label: 'Sumber berita tidak terpercaya'},
        ],
      },
    ],
  },
};

export default pemilu24ReportDisinformationGameData;
