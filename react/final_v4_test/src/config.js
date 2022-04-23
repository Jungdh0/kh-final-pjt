export const BASE_URL = 'http://localhost:8080/api';

export const tags = [
  null,
  '#퀸카가되고싶어',
  '#맛깔나는',
  '#폰할머니집',
  '#방구석여행',
  '#냠냠쩝쩝',
  '#브금맛집',
  '#감정을파고드는',
  '#빨간맛궁금해허니',
  '#당신의기숙사는',
  '#미친상상력의비밀',
  '#잔혹한',
  '#심장마비오는',
  '#흥미진진한',
  '#아이들과보기좋은',
];

export const isLogin = () => {
  const token = window.localStorage.getItem('token');

  return !!token;
};

//로그인 여부를 로컬스토리지의 token이 존재하는지로 확인
