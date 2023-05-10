import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVimeo, faGithub } from "@fortawesome/free-brands-svg-icons";

export const mainImg = "/assets/img/img_main.jpg";
export const mainVideo = "/assets/img/video_main.mp4";

export const aboutMe = (
  <>
    <p>안녕하세요. 프론트엔드 개발자 전진희입니다. </p>
    <p>
      저는 프론트엔드 개발자로서 1년의 경력을 가지고 있습니다. 이전
      회사에서는 프로젝트의 요구사항에 맞추어 Vue를 사용하여 CMS 페이지를 개발한
      경험이 있으며, Vue를 사용하여 개발하면서 뷰 라이브러리의 레이아웃 시스템과
      컴포넌트 재사용성을 경험하였습니다.
    </p>

    <p>
      현재는 React를 공부하고 있습니다. 강의를 보며 React를 공부하면서 간단한
      프로젝트를 진행해보았고, 상태관리를 위한 Redux-toolkit을 함께 배우고
      있습니다.
    </p>
    <p>
      저는 정보처리기사 자격증을 보유하고 있습니다. 이전 회사 재직 당시 데이터를 조회해보며
      SQL에 호기심을 느껴 SQLD 자격증을 공부하여 취득하였습니다. 앞으로 더
      성장할 수 있는 개발자가 되기 위해 노력하겠습니다. 감사합니다.
    </p>
  </>
);


export const navItems = [
  { name: "home", to: "#home", icon: "icon-home" },
  { name: "about", to: "#about", icon: "icon-user-following" },
  { name: "resume", to: "#resume", icon: "icon-graduation" },
  { name: "project", to: "#project", icon: "icon-layers" },
  // { name: "contact", to: "#contact", icon: "icon-note" },
];

export const socialLink = [
  {
    name: "github.com/hallokay",
    url: "https://github.com/hallokay",
    icon: <FontAwesomeIcon icon={faGithub} />,
  },
  {
    name: "velog.io/@greenbean",
    url: "https://velog.io/@greenbean",
    icon: <FontAwesomeIcon icon={faVimeo} />,
  },
];
export const ResumeData = [
  {
    id: 1,
    category: "edu",
    icon: "icon-graduation",
    year: "2015 - 2011",
    title: "중국 칭화대학교",
    desc: (
      <>
        <p>
          저는 2011년 9월에 중국 칭화대학교 정보디자인과에 입학하여, 2015년
          7월에 졸업하였습니다.
        </p>
        <p>
          정보 디자인과는 당시 신설학과로 IT 디자인, 영상 촬영 및 편집 등 디지털
          콘텐츠들의 전반적인 내용을 다루는 학과로 어도비의 디자인 툴을 이용한
          작업과 아두이노를 통한 레고 작업, 웨어러블 등 사람이 경험하는 디지털
          요소들에 대해서도 배우고 경험했습니다.
        </p>
      </>
    ),
  },
  {
    id: 2,
    category: "experience",
    icon: "icon-briefcase",
    year: "2022.3 - 2023.2",
    title: "프론트엔드 개발자",
    company: '푸드넷 24',
    desc: (
      <>
        <p>
          저는 회사 내에서 유일한 프론트엔드 개발자로서 
          <strong> Vue를 이용</strong>하여 CMS 페이지의 프론트엔드 개발을
          담당했습니다.
        </p>
        <p>
          운영자와 점주(ROLE)에 따른 쿠폰 관리 / 공지사항&이벤트 / 문의 사항 /
          가게 관리 / 결제 & 정산 관리(리스트 / 대시보드) 등의
          <strong>페이지의 목록을 불러오고 등록, 수정, 삭제</strong>를 하는
          작업했고, 회원가입 / 비밀번호 찾기에 들어가는 휴대폰 인증이나 카카오
          맵 연동하여 주소를 삽입하는 작업을 했습니다.
        </p>
        <p>
          CMS 페이지는 따로 디자인이 없었기 때문에, 유저에게 제공되는 앱의
          디자인 기반으로 비슷한 분위기의 UI를 구성하는 CSS 작업도 했습니다.
        </p>
      </>
    ),
  },
  {
    id: 3,
    category: "experience",
    icon: "icon-briefcase",
    year: "2022.1 - 2021.11",
    title: "퍼블리셔",
    company: '스프링웍스',
    desc: (
      <>
        <p>저는 약 3개월 간 퍼블리셔로서 일했습니다.</p>
        <p>
          입사와 동시에 춘천 시청 리뉴얼 홈페이지의 분야별 메인 페이지와 세부
          페이지 작업에 투입되었고, 한림대학교 계절 학기 페이지(개인), 봄의 대화
          메인 페이지 전체와 일부 세부 페이지, 경기도 체육대회와 경기도 장애인
          체육대회 홈페이지의 세부 페이지, 그리고 강원문화재단의 CI 소개
          페이지와 전체 부분 변경 및 로고 수정 등의 공공기관 관련 홈페이지
          작업을 했습니다.
        </p>
      </>
    ),
  },
];

export const projects = [
  {
    id: 1,
    title: "Youtube(clone)",
    img: "",
    code: "https://github.com/hallokay/youtube_clone",
    url: "https://645b3e3750f99f0724d6220a--prismatic-chaja-dd6e5d.netlify.app/",
    desc: `RAPID API를 활용해 리액트로 API로 정보를 받아오는 연습을 했습니다. 
    constants.js파일을 만들어 필요한 아이콘과 이미지를 관리하는 방법과
리액트 커스텀 훅으로 fetchFromAPI 훅을 만들어 공통으로 들어가는 부분을 정리하는 법도 배웠습니다.
CSS는 material UI를 이용했습니다.
`,
  },
  {
    id: 2,
    title: "E-Commerce(redux)",
    img: "",
    code: "https://github.com/hallokay/E-commerce_React_Redux",
    url: "https://hallokay.github.io/E-commerce_React_Redux/",
    desc: `
    `,
  },
  {
    id: 3,
    title: "디즈니+(clone)",
    img: "",
    code: "https://github.com/hallokay/disney_clone",
    url: "https://disnetplus-clone-7dff2.web.app",
    desc: `파이어베이스를 이용해 배포한 디즈니플러스 클론 페이지입니다. 
    파이어베이스를 이용해 구글 아이디로 로그인하는 방법과 
    로그인한 유저정보를 리덕스로 저장하는 방법을 배웠습니다.
    또, styled Components를 이용해 CSS 스타일을 컴포넌트로 다루는 방법을 배웠습니다.
    원래는 없는 부분이지만, ADD메뉴를 만들어 영화데이터를 추가하는 페이지를 만들어보았습니다
    `,
  },

  // {
  //   id: 4,
  //   title: "블로그(redux-toolkit)",
  //   img: "",
  //   code: "",
  //   url: "",
  //   desc: `

  //   `,
  // },
];
