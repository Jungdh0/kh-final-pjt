//     '#퀸카가 되고싶어?', 0
//     '#맛깔나는', 1
//     '#폰할머니집', 2
//     '#방구석여행', 3
//     '#냠냠쩝쩝', 4
//     '#브금맛집', 5
//     '#감정을파고드는', 6
//     '#빨간맛궁금해허니', 7
//     '#당신의기숙사는', 8
//     '#미친상상력의비밀', 9
//     '#잔혹한', 10
//     '#심장마비오는', 11
//     '#흥미진진한', 12
//     '#아이들과보기좋은', 13

const qnaList = [
  {
    q: "1. 이틀간의 자유시간이 생겼다. 쉬는 동안 가고 싶은 장소는?",
    a: [
      {
        answer: "A. 느긋하고 여유로운 분위기의 카페",
        type: [2, 3, 4, 5],
      },
      {
<<<<<<< Updated upstream
        answer: 'B. 어둡고 화려한 조명이 있는 술집',
        type: [0, 1, 7, 10, 11, 12],
      },
      {
        answer: 'C. 평소에 잘 못가던 인기 전시회',
        type: [6, 8, 9, 13],
=======
        answer: "B. 어둡고 화려한 조명이 있는 술집",
        type: [0, 1, 7, 10, 11],
      },
      {
        answer: "C. 평소에 잘 못가던 인기 전시회",
        type: [6, 8, 9],
>>>>>>> Stashed changes
      },
    ],
  },
  {
    q: "2. 카페에서 느긋하게 하고싶은 것은?",
    a: [
      {
<<<<<<< Updated upstream
        answer: 'A. 예쁜 디저트 사진을 열심히 찍어서 업로드',
        type: [0, 1, 2, 3, 7, 12],
      },
      {
        answer: 'B. 달달한 간식과 음료 먹으며 여유롭게 ',
        type: [4, 5, 6, 13],
=======
        answer: "A. 예쁜 디저트 사진을 열심히 찍어서 업로드",
        type: [0, 1, 2, 3, 7],
      },
      {
        answer: "B. 달달한 간식과 음료 먹으며 여유롭게 ",
        type: [4, 5, 6],
>>>>>>> Stashed changes
      },
      {
        answer: "C. 차분한 마음으로 자기개발을 위한 독서",
        type: [8, 9, 10, 11],
      },
    ],
  },
  {
    q: "3. 창 밖을 보니 비가 온다. 비를 보면 드는 생각은?",
    a: [
      {
        answer: "A. 토독토독 들는 빗소리가 asmr같다",
        type: [0, 3, 5, 6],
      },
      {
<<<<<<< Updated upstream
        answer: 'B. 비오는날 어두운 뒷골목에서 이뤄지는 스릴만점 추격전이 생각난다.',
        type: [7, 8, 9, 10, 11, 12],
      },
      {
        answer: 'C. 비오는 날에는 바삭바삭 맛있는 부침개를 먹어야지',
        type: [1, 2, 4, 13],
=======
        answer:
          "B. 비오는날 어두운 뒷골목에서 이뤄지는 스릴만점 추격전이 생각난다.",
        type: [7, 8, 9, 10, 11],
      },
      {
        answer: "C. 비오는 날에는 바삭바삭 맛있는 부침개를 먹어야지",
        type: [1, 2, 4],
>>>>>>> Stashed changes
      },
    ],
  },
  {
    q: "4. 은퇴 후 내 집 마련의 꿈을 실현한다면?",
    a: [
      {
<<<<<<< Updated upstream
        answer: 'A. 무조건 도시를 벗어나서 살아야지! 지친 영혼을 치유하는 자연의 소리~',
        type: [2, 3, 5, 13],
      },
      {
        answer: 'B. 복작복작하고 편의 시설 빵빵한 도시에 살아야지!',
        type: [0, 1, 4, 7, 10, 11, 12],
=======
        answer:
          "A. 무조건 도시를 벗어나서 살아야지! 지친 영혼을 치유하는 자연의 소리~",
        type: [2, 3, 5],
      },
      {
        answer: "B. 복작복작하고 편의 시설 빵빵한 도시에 살아야지!",
        type: [0, 1, 4, 7, 10, 11],
>>>>>>> Stashed changes
      },
      {
        answer:
          "C. 위치보단 나만의 특별한 감성을 담을 수 있는 인테리어가 중요해",
        type: [6, 8, 9],
      },
    ],
  },
  {
    q: "5. 꿀 같은 주말! 주말 동안 할 일은?",
    a: [
      {
<<<<<<< Updated upstream
        answer: 'A. 주말을 그냥 보낼 수는 없지! 친구랑 같이 놀자',
        type: [0, 1, 3, 4, 7, 12],
      },
      {
        answer: 'B. 이불 밖은 위험해! 침대에서 밀린 영화 보기',
        type: [2, 5, 6, 13],
=======
        answer: "A. 주말을 그냥 보낼 수는 없지! 친구랑 같이 놀자",
        type: [0, 1, 3, 4, 7],
      },
      {
        answer: "B. 이불 밖은 위험해! 침대에서 밀린 영화 보기",
        type: [2, 5, 6],
>>>>>>> Stashed changes
      },
      {
        answer: "C. 주말에도 갓생살기! 평일에 바빠서 못했던 운동을 한다",
        type: [8, 9, 10, 11],
      },
    ],
  },

  {
    q: "6. 디즈니랜드에 놀러왔다! 가장 먼저 가고 싶은 곳은?",
    a: [
<<<<<<< Updated upstream
      { answer: 'A. 디즈니랜드의 랜드마크인 공주의 성으로!', type: [0, 2, 3, 8, 9, 13] },
      {
        answer: 'B. 놀이공원에 왔으면 당연히 놀이기구부터 즐겨야지!',
        type: [1, 10, 11, 12],
=======
      {
        answer: "A. 디즈니랜드의 랜드마크인 공주의 성으로!",
        type: [0, 2, 3, 8, 9],
      },
      {
        answer: "B. 놀이공원에 왔으면 당연히 놀이기구부터 즐겨야지!",
        type: [1, 10, 11],
>>>>>>> Stashed changes
      },
      {
        answer: "C. 이 날만을 기다렸다! 기념품샵 먼저 플렉스",
        type: [4, 5, 6, 7],
      },
    ],
  },
  {
    q: "7. 내 방의 옷장을 열었다. 그 안에 있는 것은?",
    a: [
<<<<<<< Updated upstream
      { answer: 'A. 새로운 곳으로 가는 입구', type: [0, 1, 8, 9, 13] },
      { answer: 'B. 묶여있는 좀비', type: [7, 10, 11, 12] },
=======
      { answer: "A. 새로운 곳으로 가는 입구", type: [0, 1, 8, 9] },
      { answer: "B. 묶여있는 좀비", type: [7, 10, 11] },
>>>>>>> Stashed changes
      {
        answer: "C. 그동안 모아온 추억이 깃든 물건들",
        type: [2, 3, 4, 5, 6],
      },
    ],
  },
  {
    q: "8. 어떤 연애를 꿈꾸나요?",
    a: [
      { answer: "A. 영화 속 주인공 같은 로맨틱한 연애", type: [0, 5, 6, 7, 9] },
      {
<<<<<<< Updated upstream
        answer: 'B. 함께 있으면 친구같이 편안하고 즐거운 연애',
        type: [1, 2, 4, 8, 13],
      },
      {
        answer: 'C. 나의 특이한 취향도 함께 즐겨주는 사람과의 연애',
        type: [3, 10, 11, 12],
=======
        answer: "B. 함께 있으면 친구같이 편안하고 즐거운 연애",
        type: [1, 2, 4, 8],
      },
      {
        answer: "C. 나의 특이한 취향도 함께 즐겨주는 사람과의 연애",
        type: [3, 10, 11],
>>>>>>> Stashed changes
      },
    ],
  },
  {
    q: "9. 오랜만에 긴 휴가가 생겼다! 여행지로 가고 싶은 곳은?",
    a: [
<<<<<<< Updated upstream
      { answer: 'A. 휴식이 필요해~ 느긋하게 쉴 수 있는곳', type: [2, 4, 5, 6, 13] },
=======
      { answer: "A. 휴식이 필요해~ 느긋하게 쉴 수 있는곳", type: [2, 4, 5, 6] },
>>>>>>> Stashed changes
      {
        answer: "B. 늘 보던 곳은 지겨워~ 매일매일 새로운 곳",
        type: [0, 1, 3, 7, 8],
      },
      {
<<<<<<< Updated upstream
        answer: 'C. 사람들이 기피하는 짜릿하고 스릴 넘치는 여행지 없나? ',
        type: [9, 10, 11, 12],
=======
        answer: "C. 사람들이 기피하는 짜릿하고 스릴 넘치는 여행지 없나? ",
        type: [9, 10, 11],
>>>>>>> Stashed changes
      },
    ],
  },
  {
    q: "10. 지치는 하루의 끝 당신을 위로하는 것은?",
    a: [
      {
<<<<<<< Updated upstream
        answer: 'A. 영혼을 살찌우는 음식',
        type: [1, 2, 3, 4, 13],
      },
      { answer: 'B. 난 슬플 때 음악을 들어', type: [0, 5, 6, 12] },
=======
        answer: "A. 영혼을 살찌우는 음식",
        type: [1, 2, 3, 4],
      },
      { answer: "B. 난 슬플 때 음악을 들어", type: [0, 5, 6] },
>>>>>>> Stashed changes
      {
        answer: "C. 많이 자는게 최고야",
        type: [7, 8, 9, 10, 11],
      },
    ],
  },
  {
    q: "11. 운명같은 사랑이란?",
    a: [
<<<<<<< Updated upstream
      { answer: 'A. 시나브로 스며드는 것', type: [2, 5, 6, 13] },
      {
        answer: 'B. 불과 같이 언제나 활활 타오르는 것',
        type: [0, 1, 3, 7, 12],
=======
      { answer: "A. 시나브로 스며드는 것", type: [2, 5, 6] },
      {
        answer: "B. 불과 같이 언제나 활활 타오르는 것",
        type: [0, 1, 3, 7],
>>>>>>> Stashed changes
      },
      {
        answer: "C. 서로의 부족함을 채워주는 것",
        type: [4, 8, 9, 10, 11],
      },
    ],
  },
  {
    q: "12. 자동차가 하늘을 난다면?",
    a: [
      {
<<<<<<< Updated upstream
        answer: 'A. 자동차가 하늘을 날면  그건 비행기지!',
        type: [1, 8, 13],
=======
        answer: "A. 자동차가 하늘을 날면  그건 비행기지!",
        type: [1, 8],
>>>>>>> Stashed changes
      },
      {
        answer: "B. 백조와 같은 우아한 날개를 가지고 있을 거야",
        type: [0, 2, 5, 6, 9],
      },
      {
<<<<<<< Updated upstream
        answer: 'C. 폭풍같은 드라이브 가보자고',
        type: [3, 4, 7, 10, 11, 12],
=======
        answer: "C. 폭풍같은 드라이브 가보자고",
        type: [3, 4, 7, 10, 11],
>>>>>>> Stashed changes
      },
    ],
  },
  {
    q: "13. 침대 밑에 귀신이 있다면?",
    a: [
      {
<<<<<<< Updated upstream
        answer: 'A. 때려잡는다',
        type: [1, 4, 7, 9, 10, 12],
=======
        answer: "A. 때려잡는다",
        type: [1, 4, 7, 9, 10],
>>>>>>> Stashed changes
      },
      {
        answer: "B. 도망친다",
        type: [0, 5, 8, 11],
      },
      {
<<<<<<< Updated upstream
        answer: 'C. 뭘 할 정신이 없다. 그대로 기절한다',
        type: [2, 3, 6, 13],
=======
        answer: "C. 뭘 할 정신이 없다. 그대로 기절한다",
        type: [2, 3, 6],
>>>>>>> Stashed changes
      },
    ],
  },
];

// 질문 답에 따라 문제 달라지게 알고리즘 짜기...일단 보류 어려움ㅠㅠ
// const qnaList = [
//   {
//     q: '1. 이틀간의 자유시간이 생겼다. 쉬는 동안 가고 싶은 장소는?',
//     a: [
//       {
//         answer: 'A. 느긋하고 여유로운 분위기의 카페',
//         type: ['#퀸카가 되고싶어?', '#맛깔나는', '#폰할머니집', '#방구석 여행', '#냠냠쩝쩝', '#브금맛집'],
//       },
//       {
//         answer: 'B. 어둡고 화려한 조명이 있는 술집',
//         type: [
//           '#감정을파고드는',
//           '#빨간맛궁금해허니',
//           '#당신의기숙사는?',
//           '#미친상상력의비밀',
//           '#잔혹한',
//           '#심장마비오는',
//         ],
//       },
//     ],
//   },
//   {
//     q: '2. 카페에서 느긋히게 하고싶은 것은?',
//     a: [
//       {
//         answer: 'A. 예쁜 디저트 사진을 열심히 찍어서 업로드',
//         type: ['#퀸카가 되고싶어?', '#맛깔나는', '#폰할머니집', '#방구석 여행'],
//       },
//       {
//         answer: 'B. 달달한 간식과 음료 먹으며 여유롭게 ',
//         type: ['#방구석 여행', '#냠냠쩝쩝', '#브금맛집', '#폰할머니집'],
//       },
//     ],
//   },
//   {
//     q: '3. 창 밖을 보니 비가 온다. 비를 보면 드는 생각은?',
//     a: [
//       {
//         answer: 'A. 토독토독 들는 빗소리가 asmr같다',
//         type: ['#감정을파고드는', '#빨간맛궁금해허니', '#당신의기숙사는?', '#미친상상력의비밀'],
//       },
//       {
//         answer: 'B. 비오는날 어두운 뒷골목에서 이뤄지는 스릴만점 추격전이 생각난다.',
//         type: ['#당신의기숙사는?', '#미친상상력의비밀', '#잔혹한', '#심장마비오는'],
//       },
//     ],
//   },
//   {
//     q: '4. 은퇴 후 내 집 마련의 꿈을 실현한다면?',
//     a: [
//       {
//         answer: 'A. 무조건 도시를 벗어나서 살아야지! 지친 영혼을 치유하는 자연의 소리~',
//         type: ['#퀸카가 되고싶어?', '#맛깔나는'],
//       },
//       {
//         answer: 'B. 복작복작하고 편의 시설 빵빵한 도시에 살아야지!',
//         type: ['#폰할머니집', '#방구석 여행'],
//       },
//     ],
//   },
//   {
//     q: '5. 꿀 같은 주말! 주말 동안 할 일은?',
//     a: [
//       {
//         answer: 'A. 주말을 그냥 보낼 수는 없지! 친구랑 같이 놀자',
//         type: ['#폰할머니집', '#방구석 여행'],
//       },
//       {
//         answer: 'B. 이불 밖은 위험해! 침대에서 밀린 영화 보기',
//         type: ['#냠냠쩝쩝', '#브금맛집'],
//       },
//     ],
//   },

//   {
//     q: '6. 디즈니랜드에 놀러왔다! 가장 먼저 가고 싶은 곳은?',
//     a: [
//       { answer: 'A. 디즈니랜드의 랜드마크인 공주의 성으로!', type: ['#감정을파고드는', '#빨간맛궁금해허니'] },
//       {
//         answer: 'B. 놀이공원에 왔으면 당연히 놀이기구부터 즐겨야지!',
//         type: ['#당신의기숙사는?', '#미친상상력의비밀'],
//       },
//     ],
//   },
//   {
//     q: '7. 내 방의 옷장을 열었다. 그 안에 있는 것은?',
//     a: [
//       { answer: 'A. 새로운 곳으로 가는 입구', type: ['#당신의기숙사는?', '#미친상상력의비밀'] },
//       { answer: 'B. 묶여있는 좀비', type: ['#잔혹한', '#심장마비오는'] },
//     ],
//   },
//   {
//     q: '8. 어떤 연애를 꿈꾸나요?',
//     a: [
//       { answer: 'A. 영화 속 주인공 같은 로맨틱한 연애', type: ['# 퀸카가 되고싶어?'] },
//       {
//         answer: 'B. 함께 있으면 친구같이 편안하고 즐거운 연애',
//         type: ['# 맛깔나는'],
//       },
//     ],
//   },
//   {
//     q: '9. 오랜만에 긴 휴가가 생겼다! 여행지로 가고 싶은 곳은?',
//     a: [
//       { answer: 'A. 휴식이 필요해~ 느긋하게 쉴 수 있는곳', type: ['# 폰할머니집'] },
//       {
//         answer: 'B. 늘 보던 곳은 지겨워~ 매일매일 새로운 곳',
//         type: ['#방구석 여행'],
//       },
//     ],
//   },
//   {
//     q: '10. 지치는 하루의 끝 당신을 위로하는 것은?',
//     a: [
//       {
//         answer: 'A. 영혼을 살찌우는 음식',
//         type: ['#냠냠쩝쩝'],
//       },
//       { answer: 'B. 난 슬플 때 음악을 들어', type: ['#브금맛집'] },
//     ],
//   },
//   {
//     q: '11. 운명같은 사랑이란?',
//     a: [
//       { answer: 'A. 시나브로 스며드는 것', type: ['#감정을파고드는'] },
//       {
//         answer: 'B. 불과 같이 언제나 활활 타오르는 것',
//         type: ['#빨간맛궁금해허니'],
//       },
//     ],
//   },
//   {
//     q: '12. 자동차가 하늘을 난다면?',
//     a: [
//       {
//         answer: 'A. 자동차가 하늘을 날면  그건 비행기지!',
//         type: ['#당신의기숙사는?'],
//       },
//       {
//         answer: 'B. 백조와 같은 우아한 날개를 가지고 있을 거야',
//         type: ['#미친상상력의비밀'],
//       },
//     ],
//   },
//   {
//     q: '13. 침대 밑에 귀신이 있다면?',
//     a: [
//       {
//         answer: 'A. 때려잡는다',
//         type: ['#잔혹한?'],
//       },
//       {
//         answer: 'B. 도망친다',
//         type: ['#심장마비오는'],
//       },
//     ],
//   },
// ];

const infoList = [
  {
    name: "#퀸카가 되고싶어?",
    desc: "퀸카가 되고 싶어를 선택한 당신! 어쩌구 저쩌구~ 달콤한 로맨스를 꿈꾸는 당신을 위한 추천 콘텐츠는?  I do the same thing I told you that I never would I told you I changed, even when I knew I never could I know that I can't find nobody else as good as you I need you to stay, need you to stay, hey I get drunk, wake up, I'm wasted still",
  },
  {
    name: "#맛깔나는",
    desc: "I do the same thing I told you that I never would I told you I changed, even when I knew I never could I know that I can't find nobody else as good as you I need you to stay, need you to stay, hey I get drunk, wake up, I'm wasted still",
  },
  {
    name: "#폰할머니집",
    desc: "I do the same thing I told you that I never would I told you I changed, even when I knew I never could I know that I can't find nobody else as good as you I need you to stay, need you to stay, hey I get drunk, wake up, I'm wasted still",
  },
  {
    name: "#방구석여행",
    desc: "I do the same thing I told you that I never would I told you I changed, even when I knew I never could I know that I can't find nobody else as good as you I need you to stay, need you to stay, hey I get drunk, wake up, I'm wasted still",
  },
  {
    name: "#냠냠쩝쩝",
    desc: "I do the same thing I told you that I never would I told you I changed, even when I knew I never could I know that I can't find nobody else as good as you I need you to stay, need you to stay, hey I get drunk, wake up, I'm wasted still",
  },
  {
    name: "#브금맛집",
    desc: "I do the same thing I told you that I never would I told you I changed, even when I knew I never could I know that I can't find nobody else as good as you I need you to stay, need you to stay, hey I get drunk, wake up, I'm wasted still",
  },
  {
    name: "#감정을파고드는",
    desc: "I do the same thing I told you that I never would I told you I changed, even when I knew I never could I know that I can't find nobody else as good as you I need you to stay, need you to stay, hey I get drunk, wake up, I'm wasted still",
  },
  {
    name: "#빨간맛궁금해허니",
    desc: "I do the same thing I told you that I never would I told you I changed, even when I knew I never could I know that I can't find nobody else as good as you I need you to stay, need you to stay, hey I get drunk, wake up, I'm wasted still",
  },
  {
    name: "#당신의기숙사는",
    desc: "I do the same thing I told you that I never would I told you I changed, even when I knew I never could I know that I can't find nobody else as good as you I need you to stay, need you to stay, hey I get drunk, wake up, I'm wasted still",
  },
  {
    name: "#미친상상력의비밀",
    desc: "I do the same thing I told you that I never would I told you I changed, even when I knew I never could I know that I can't find nobody else as good as you I need you to stay, need you to stay, hey I get drunk, wake up, I'm wasted still",
  },
  {
    name: "#잔혹한",
    desc: "I do the same thing I told you that I never would I told you I changed, even when I knew I never could I know that I can't find nobody else as good as you I need you to stay, need you to stay, hey I get drunk, wake up, I'm wasted still",
  },
  {
    name: "#심장마비오는",
    desc: "I do the same thing I told you that I never would I told you I changed, even when I knew I never could I know that I can't find nobody else as good as you I need you to stay, need you to stay, hey I get drunk, wake up, I'm wasted still",
  },
  {
    name: '#흥미진진한',
    desc: "I do the same thing I told you that I never would I told you I changed, even when I knew I never could I know that I can't find nobody else as good as you I need you to stay, need you to stay, hey I get drunk, wake up, I'm wasted still",
  },
  {
    name: '#아이들과보기좋은',
    desc: "I do the same thing I told you that I never would I told you I changed, even when I knew I never could I know that I can't find nobody else as good as you I need you to stay, need you to stay, hey I get drunk, wake up, I'm wasted still",
  },
];
