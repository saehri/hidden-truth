import {ReportDisinformationGameDataTypes} from '../../../services/utils/types';
import {reportDisinformationRewardsList} from '../../storyline/specialStoryline/SSPemilu24';

const pemilu24ReportDisinformationGameData: Record<
  string,
  ReportDisinformationGameDataTypes
> = {
  'PEMILU24-RD-C1-5': {
    hasTutorial: true,
    rewards: reportDisinformationRewardsList.game1,
    totalDisinformationCategory: 3,
    data: [
      {
        postId: 1,
        postCaption: `Hari ini terpantau banyak pesanan kamar di RSJ. Ada antrian pasien korban gagal caleg 2024. Tetaplah bersyukur apapun keadaanmu hari ini. Lihat çaleg dari Partai oligarki banyak yg gagal calon uang sudah banyak habis ' rumah sakit jiwa ujung" nya😂😂😂`,
        isDisinformation: true,
        disinformationCategory: '3-4',
        postAuthor: {
          authorName: 'Ucok Loreng Mba',
          authorProfileImage:
            'https://www.dropbox.com/scl/fi/s9hdk9n8xegqcv6iy6psm/profile-image-postID-3.webp?rlkey=gini7algf3jvk3mqplggo7sj9&raw=1',
          authorUsername: '@Uucoklorengmba',
          authorBio:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil iste hic in, odio voluptate molestiae.',
          followerCount: 120,
          followingCount: 80,
        },
        postUploadedTime: '15 Februari 2024',
        hasMedia: true,
        mediaLink:
          'https://www.dropbox.com/scl/fi/5oy977yb5miqr5pzjj584/PostID-3.webp?rlkey=jyngkbfsa090ornbx493s15rj&raw=1',
        disinformationCategoryInfo: [
          {id: 1, label: 'Manipulasi video/gambar'},
          {id: 2, label: 'Impersonasi'},
          {
            id: 3,
            label: 'Berita bohong',
            reason:
              'Ucok Loreng Mba membuat klaim tanpa bukti. Hal ini memperkuat kemungkinan bahwa klaim yang dibuat berisi kebohongan.',
          },
          {
            id: 4,
            label: 'Sumber berita tidak terpercaya',
            reason:
              'Ucok Loreng Mba tidak mencantumkan sumber terpercaya yang bisa digunakan untuk memverifikasi silang pernyataan yang ia buat.',
          },
        ],
      },
      {
        postId: 2,
        postCaption:
          'STU48 Kai Kokoa announces transfer to KLP48, where she will be part of 1st Generation',
        isDisinformation: false,
        postAuthor: {
          authorName: '48RH (Fan Account)',
          authorProfileImage:
            'https://pbs.twimg.com/profile_images/1757022956885082112/qkbGm6wl_400x400.jpg',
          authorUsername: '@48RequestHour',
          authorBio:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil iste hic in, odio voluptate molestiae.',
          followerCount: 120,
          followingCount: 80,
        },
        postUploadedTime: '12m',
        hasMedia: true,
        mediaLink:
          'https://pbs.twimg.com/media/GI7CbLIaEAAdDBQ?format=jpg&name=900x900',
        disinformationCategoryInfo: [
          {id: 1, label: 'Manipulasi video/gambar'},
          {id: 2, label: 'Impersonasi'},
          {id: 3, label: 'Berita bohong'},
          {id: 4, label: 'Sumber berita tidak terpercaya'},
        ],
      },
      {
        postId: 3,
        postCaption: `[Cm] lebih prefer yang mana:

          A. skripsi selesai dengan hasil yang cukup (ga yang perfect)
          
          B. skripsi dengan hasil perfect tp makan banyak waktu`,
        isDisinformation: false,
        postAuthor: {
          authorName: '@collegemenfess',
          authorProfileImage:
            'https://pbs.twimg.com/profile_images/1592885791482556416/jK8xCWwx_400x400.jpg',
          authorUsername: '@48RequestHour',
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
        postCaption: '😂😂😂😂😂',
        isDisinformation: true,
        disinformationCategory: '1',
        postAuthor: {
          authorName: 'Raflesia Arnoldy',
          authorProfileImage:
            'https://www.dropbox.com/scl/fi/a045frr1f1w02lksbr99l/profile-image-postID-2.webp?rlkey=a7blttmj0w2t2g12d9nwtvgw6&raw=1',
          authorUsername: '@raflesiarnoldy',
          authorBio:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil iste hic in, odio voluptate molestiae.',
          followerCount: 120,
          followingCount: 80,
        },
        postUploadedTime: '1h',
        hasMedia: true,
        mediaLink:
          'https://www.dropbox.com/scl/fi/h3k9lxxxp1vk9wqj4ukig/postID-2.webp?rlkey=ezlzogllzfzs9rckj50sofjcg&raw=1',
        disinformationCategoryInfo: [
          {
            id: 1,
            label: 'Manipulasi video/gambar',
            reason:
              'Tim Cek Fakta Tempo memverifikasi klaim di atas dengan bantuan Google Lens. Ditemukan bahwa foto uang dalam amplop pernah diunggah oleh akun media sosial Instagram Weru.shter ini pada 28 November 2023. Lebih lengkap: https://shorturl.at/bdsN4',
          },
          {id: 2, label: 'Impersonasi'},
          {id: 3, label: 'Berita bohong'},
          {id: 4, label: 'Sumber berita tidak terpercaya'},
        ],
      },
      {
        postId: 5,
        postCaption: `💚 baru tauu, berarti ga harus kemeja putih sama celana hitam ya? saran outfit lamar kerja dong guys versi kalian 🙌🏻`,
        isDisinformation: false,
        postAuthor: {
          authorUsername: 'Tanyarl 💚',
          authorName: '@tanyakanrl',
          authorProfileImage:
            'https://pbs.twimg.com/profile_images/1406236086884462593/KTECvoQx_400x400.jpg',
          authorBio:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil iste hic in, odio voluptate molestiae.',
          followerCount: 120,
          followingCount: 80,
        },
        postUploadedTime: '12m',
        hasMedia: true,
        mediaLink:
          'https://pbs.twimg.com/media/GI6_PrcaIAAPBQ5?format=jpg&name=large',
        disinformationCategoryInfo: [
          {id: 1, label: 'Manipulasi video/gambar'},
          {id: 2, label: 'Impersonasi'},
          {id: 3, label: 'Berita bohong'},
          {id: 4, label: 'Sumber berita tidak terpercaya'},
        ],
      },
    ],
  },
  'PEMILU24-RD-C2-3': {
    data: [
      {
        postId: 1,
        postCaption: `Tujuan Rohingya masuk ke indonesia menambah Suara salah satu Capres... Terus Menhan kerja nya apa ?? Rohingya saja yg hanya pakai kapal Kayu bisa jebol gimana dgn Musuh.. kebanyakan omon omon.. `,
        isDisinformation: true,
        disinformationCategory: '3-4',
        postAuthor: {
          authorName: 'Ucok Loreng Mba',
          authorProfileImage:
            'https://www.dropbox.com/scl/fi/s9hdk9n8xegqcv6iy6psm/profile-image-postID-3.webp?rlkey=gini7algf3jvk3mqplggo7sj9&raw=1',
          authorUsername: '@Uucoklorengmba',
          authorBio:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil iste hic in, odio voluptate molestiae.',
          followerCount: 120,
          followingCount: 80,
        },
        postUploadedTime: '9 Januari 2024',
        hasMedia: true,
        mediaLink:
          'https://www.dropbox.com/scl/fi/g7egd1gv8ambno5u21qjm/postID-1.webp?rlkey=4hse62oarvm4dgaqks6cmujjd&raw=1',
        disinformationCategoryInfo: [
          {id: 1, label: 'Manipulasi video/gambar'},
          {id: 2, label: 'Impersonasi'},
          {
            id: 3,
            label: 'Berita bohong',
            reason:
              'Narasi soal kedatangan pengungsi Rohingya untuk memenangkan salah satu capres merupakan hoaks. KPU Tulungagung telah mencoret satu nama pengungsi asal Myanmar yang masuk dalam DPT. Sumber: https://shorturl.at/rH467',
          },
          {
            id: 4,
            label: 'Sumber berita tidak terpercaya',
            reason:
              'Tidak ada situs berita yang terdaftar dengan nama "VASNEWS"',
          },
        ],
      },
      {
        postId: 2,
        postCaption:
          'STU48 Kai Kokoa announces transfer to KLP48, where she will be part of 1st Generation',
        isDisinformation: false,
        postAuthor: {
          authorName: '48RH (Fan Account)',
          authorProfileImage:
            'https://pbs.twimg.com/profile_images/1757022956885082112/qkbGm6wl_400x400.jpg',
          authorUsername: '@48RequestHour',
          authorBio:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil iste hic in, odio voluptate molestiae.',
          followerCount: 120,
          followingCount: 80,
        },
        postUploadedTime: '12m',
        hasMedia: true,
        mediaLink:
          'https://pbs.twimg.com/media/GI7CbLIaEAAdDBQ?format=jpg&name=900x900',
        disinformationCategoryInfo: [
          {id: 1, label: 'Manipulasi video/gambar'},
          {id: 2, label: 'Impersonasi'},
          {id: 3, label: 'Berita bohong'},
          {id: 4, label: 'Sumber berita tidak terpercaya'},
        ],
      },
      {
        postId: 3,
        postCaption: `[cm] guys aku lg di perpusss tp nga tau ini cara aktifin keyboard yg sebelah sini tuh di gimanain ya? soalnya aku pencet angka2nya gamau keluar😭😭`,
        isDisinformation: false,
        postAuthor: {
          authorName: '@collegemenfess',
          authorProfileImage:
            'https://pbs.twimg.com/profile_images/1592885791482556416/jK8xCWwx_400x400.jpg',
          authorUsername: '@48RequestHour',
          authorBio:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil iste hic in, odio voluptate molestiae.',
          followerCount: 120,
          followingCount: 80,
        },
        postUploadedTime: '12m',
        hasMedia: true,
        mediaLink:
          'https://pbs.twimg.com/media/GJAB1b3bsAA6DiG?format=jpg&name=large',
        disinformationCategoryInfo: [
          {id: 1, label: 'Manipulasi video/gambar'},
          {id: 2, label: 'Impersonasi'},
          {id: 3, label: 'Berita bohong'},
          {id: 4, label: 'Sumber berita tidak terpercaya'},
        ],
      },
    ],
    hasTutorial: false,
    rewards: reportDisinformationRewardsList.game1,
    totalDisinformationCategory: 2,
  },
  'PEMILU24-RD-C2-5': {
    data: [
      {
        postId: 1,
        postCaption: `[cm] guys aku lg di perpusss tp nga tau ini cara aktifin keyboard yg sebelah sini tuh di gimanain ya? soalnya aku pencet angka2nya gamau keluar😭😭`,
        isDisinformation: false,
        postAuthor: {
          authorName: '@collegemenfess',
          authorProfileImage:
            'https://pbs.twimg.com/profile_images/1592885791482556416/jK8xCWwx_400x400.jpg',
          authorUsername: '@48RequestHour',
          authorBio:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil iste hic in, odio voluptate molestiae.',
          followerCount: 120,
          followingCount: 80,
        },
        postUploadedTime: '12m',
        hasMedia: true,
        mediaLink:
          'https://pbs.twimg.com/media/GJAB1b3bsAA6DiG?format=jpg&name=large',
        disinformationCategoryInfo: [
          {id: 1, label: 'Manipulasi video/gambar'},
          {id: 2, label: 'Impersonasi'},
          {id: 3, label: 'Berita bohong'},
          {id: 4, label: 'Sumber berita tidak terpercaya'},
        ],
      },
      {
        postId: 2,
        postCaption: `[Cm] lebih prefer yang mana:

          A. skripsi selesai dengan hasil yang cukup (ga yang perfect)
          
          B. skripsi dengan hasil perfect tp makan banyak waktu`,
        isDisinformation: false,
        postAuthor: {
          authorName: '@collegemenfess',
          authorProfileImage:
            'https://pbs.twimg.com/profile_images/1592885791482556416/jK8xCWwx_400x400.jpg',
          authorUsername: '@48RequestHour',
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
        postId: 3,
        postCaption: `MELEDAK!!! Hasil quickcount salah tanggal.   Tak ada kejahatan yang sempurna Alloh akan perlihatkan satu persatu kecurangan mereka.`,
        isDisinformation: true,
        postAuthor: {
          authorName: 'soraya H',
          authorProfileImage: '',
          authorUsername: '@sirayaali01',
          authorBio:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil iste hic in, odio voluptate molestiae.',
          followerCount: 120,
          followingCount: 80,
        },
        disinformationCategory: '1-3',
        postUploadedTime: '15 Februari 2024',
        hasMedia: true,
        mediaLink:
          'https://www.dropbox.com/scl/fi/0m4hpa4duy3jn5egj9k13/postID-7.webp?rlkey=y1wygj7j18641pji7ijmq3qaf&raw=1',
        disinformationCategoryInfo: [
          {id: 1, label: 'Manipulasi video/gambar'},
          {id: 2, label: 'Impersonasi'},
          {id: 3, label: 'Berita bohong'},
          {id: 4, label: 'Sumber berita tidak terpercaya'},
        ],
      },
      {
        postId: 4,
        postCaption:
          'STU48 Kai Kokoa announces transfer to KLP48, where she will be part of 1st Generation',
        isDisinformation: false,
        postAuthor: {
          authorName: '48RH (Fan Account)',
          authorProfileImage:
            'https://pbs.twimg.com/profile_images/1757022956885082112/qkbGm6wl_400x400.jpg',
          authorUsername: '@48RequestHour',
          authorBio:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil iste hic in, odio voluptate molestiae.',
          followerCount: 120,
          followingCount: 80,
        },
        postUploadedTime: '12m',
        hasMedia: true,
        mediaLink:
          'https://pbs.twimg.com/media/GI7CbLIaEAAdDBQ?format=jpg&name=900x900',
        disinformationCategoryInfo: [
          {id: 1, label: 'Manipulasi video/gambar'},
          {id: 2, label: 'Impersonasi'},
          {id: 3, label: 'Berita bohong'},
          {id: 4, label: 'Sumber berita tidak terpercaya'},
        ],
      },
      {
        postId: 5,
        postCaption: `Hasil Pemungutan suara di luar negeri sdh keliatan hasilnya diatas 77% AMIN MENANG…`,
        isDisinformation: true,
        postAuthor: {
          authorName: 'Posko Menang',
          authorProfileImage:
            'https://www.dropbox.com/scl/fi/ayu9tq7tdhqbbr9p7rjzv/profile-image-postID-8.webp?rlkey=70tmyq5ia926uf79zj5lb3un8&raw=1',
          authorUsername: '@poskomenag',
          authorBio:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil iste hic in, odio voluptate molestiae.',
          followerCount: 120,
          followingCount: 80,
        },
        disinformationCategory: '1-3-4',
        postUploadedTime: '22 April 23',
        hasMedia: true,
        mediaLink:
          'https://www.dropbox.com/scl/fi/v48w077z1qv83bwlbqzzy/PostID-8.webp?rlkey=eca0wcceiyjgv7ppv8amb4xc5&raw=1',
        disinformationCategoryInfo: [
          {id: 1, label: 'Manipulasi video/gambar'},
          {id: 2, label: 'Impersonasi'},
          {id: 3, label: 'Berita bohong'},
          {id: 4, label: 'Sumber berita tidak terpercaya'},
        ],
      },
    ],
    hasTutorial: false,
    rewards: reportDisinformationRewardsList.game1,
    totalDisinformationCategory: 5,
  },
};

export default pemilu24ReportDisinformationGameData;
