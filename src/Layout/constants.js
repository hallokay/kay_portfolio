export const navItems = [
  { name: "home", to: "#home", icon: "icon-home" },
  { name: "about", to: "#about", icon: "icon-user-following" },
  { name: "resume", to: "#resume", icon: "icon-graduation" },
  { name: "project", to: "#project", icon: "icon-layers" },
  { name: "contact", to: "#contact", icon: "icon-note" },
];

export const projects = [
  {
    name: "Youtube(clone)",
    url: "https://disnetplus-clone-7dff2.web.app",
    desc: `RAPID API를 활용해 리액트로 API로 정보를 받아오는 연습을 했습니다. 
    constants.js파일을 만들어 필요한 아이콘과 이미지를 이름지어 관리하는 방법과
리액트 커스텀 훅으로 fetchFromAPI 훅을 만들어 공통으로 들어가는 부분을 정리하는 법도 배웠습니다.
CSS는 material UI를 이용했습니다.
`,
  },
  {
    name: "디즈니+(clone)",
    url: "https://disnetplus-clone-7dff2.web.app",
    desc: `파이어베이스를 이용해 배포한 디즈니플러스 클론 페이지입니다. 
    파이어베이스를 이용해 구글 아이디로 로그인하는 방법과 
    로그인한 유저정보를 리덕스로 저장하는 방법을 배웠습니다.
    또, styled Components를 이용해 CSS 스타일을 컴포넌트로 다루는 방법을 배웠습니다.
    원래는 없는 부분이지만 파이어베이스에서 CRUD를 연습해보고 싶어, ADD메뉴를 만들어 영화데이터를 추가하는 페이지를 만들어보았습니다
    `,
  },
];