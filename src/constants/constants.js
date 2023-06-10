import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVimeo, faGithub } from "@fortawesome/free-brands-svg-icons";

export const mainImg = "/assets/img/img_main.jpg";
export const mainVideo = "/assets/img/video_main.mp4";

export const aboutMe = (
  <>
    <h2>Front-end 개발자 전진희 입니다.</h2>
    <p>
      저는 프론트엔드 개발자로서 <strong>1년의 경력</strong>을 가지고 있습니다.</p>
    <p>
      이전 회사에서는 프로젝트의 요구사항에 맞추어 Vue를 사용하여 CMS 페이지를
      개발한 경험이 있으며, Vue 라이브러리의 레이아웃 시스템과 컴포넌트 재사용성을 경험하였습니다.
    </p>
    <h2>현재</h2>
    <p>
      React를 공부하고 있습니다. 강의를 보며 React를 공부하면서 간단한
      프로젝트를 진행해보았고, 상태관리를 위한 Redux-toolkit을 함께 배우고
      있습니다.
    </p>
     <h2>자격증</h2>
    <p>
      저는 정보처리기사 자격증을 보유하고 있고, 이전 회사 재직 당시 데이터를
      조회해보며 SQL에 호기심을 느껴 SQLD 자격증을 공부하여 취득하였습니다.

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
    company: "푸드넷 24",
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
    company: "스프링웍스",
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
    id: 4,
    title: "Netflix clone",
    img: "/assets/img/netflix_cloneImg.jpg",
    code: "https://github.com/hallokay/netflix",
    url: "https://netflix-2faa1.web.app/",
    desc: (<>
      <p>
        넷플릭스 페이지 클론입니다. react, reduxToolkit, firebase를 이용해 만들었습니다.
        디즈니+와 비슷하지만, firebase에서 구글 로그인이 아닌 방식으로 회원가입을 하고 로그인 하는 방법으로 구현했고,
        마음에 드는 영화 리스트를 저장할 수 있는 기능도 연습해볼 수 있었습니다.

      </p>
      <p>
        다른 강의에서 배웠던 부분들을 한번 복습해보고자 시작했는데 비효율적이라고 생각이 들었던 부분들이 있어
        그런 부분들은 제가 효율적이라고 느끼는 방식으로 변경했고, 혼자서는 어려웠던 부분들은 chat GPT를 이용해서 코드를 개선했습니다.

      </p>
      <p>

        강의에서는 MERN stack으로 백엔드의 일부분도 포함이 되어 좋아하는 영화를 저장하는 부분을 구현하게 되어있었지만,
        그 부분에 대해서 초보자가 따라할 수 없게 만들어져 있어 Mongo DB로 url를 받아오는 부분에서 에러를 만났고 그 부분을 해결하지 못했습니다.
        대안으로 좋아하는 영화를 저장하는 부분은 리덕스를 이용해서 구현했습니다.
      </p>
      <div className="velog">
        <h4>
          관련 내용 정리
        </h4>
        <ul>
          <li>
            <a href="https://velog.io/@greenbean/netflix-clone-movieSlice-%EC%BD%94%EB%93%9C-%EA%B0%9C%EC%84%A0-%EC%84%A4%EB%AA%85">netflix movieSlice 코드 개선</a>

          </li>
          <li>
            <a href="https://velog.io/@greenbean/netflix-clone-main-page-%EC%BD%94%EB%93%9C-%EA%B0%9C%EC%84%A0">main page 코드 개선</a>

          </li>
          <li>
            <a href="https://velog.io/@greenbean/netflix-clone-%ED%9A%8C%EA%B3%A0">문제 해결과 회고</a>

          </li>
        </ul>
      </div>

    </>
    ),
  },

  {
    id: 3,
    title: "디즈니+(clone)",
    img: "/assets/img/disney_cloneImg.jpg",
    code: "https://github.com/hallokay/disney_clone",
    url: "https://disnetplus-clone-7dff2.web.app",
    desc: (
      <>
        <p>
          react, reduxToolkit, firebase, styled Components를 이용해 만들어진 디즈니+ clone 입니다.
          firebase를 이용해 배포했습니다.
        </p>
        <p>
          이 프로젝트를 통해 파이어베이스를 다뤄보고 파이어베이스를 이용해 구글 아이디로 로그인하는 방법과
          로그인한 유저정보를 리덕스로 저장하는 방법을 배웠습니다.

          또, styled Components를 이용해 CSS 스타일을 컴포넌트로 다루는 방법을 배웠습니다.
        </p>
        <p>
          이 페이지의 영화목록은 firebase cloud store를 이용했는데 movie라는 컬렉션을 생성해 영화 정보를 입력해주고
          받아오는 방식으로 만들었습니다.
          원래는 강의에 없는 부분이지만, 일일히 컬렉션에 영화 데이터를 수동으로 넣기가 귀찮아져
          ADD메뉴를 만들어 영화데이터를 추가하는 페이지를 만들어보았습니다.

        </p>
        <div className="velog">
          <h4>
            관련 내용 정리
          </h4>

          <ul>
            <li>
              <a href="https://velog.io/@greenbean/react%EC%97%90%EC%84%9C-%EB%8D%B0%EC%9D%B4%ED%84%B0%EB%A5%BC-%EB%B0%9B%EC%95%84%EC%98%AC-%EB%95%8C-.Optional-Chaining.-%EB%AC%B8%EB%B2%95-feat.-chat-GPT">옵셔널 체이닝</a>

            </li>
            <li>
              <a href="https://velog.io/@greenbean/%EB%A6%AC%EC%95%A1%ED%8A%B8-%EB%B9%84%EA%B5%AC%EC%A1%B0%ED%99%94-%ED%95%A0%EB%8B%B9">
                비구조화 할당
              </a>
            </li>
          </ul>
        </div>
      </>),
  },
  // {
  //   id: 2,
  //   title: "E-Commerce(redux)",
  //   img: "",
  //   code: "https://github.com/hallokay/E-commerce_React_Redux",
  //   url: "https://hallokay.github.io/E-commerce_React_Redux/",
  //   desc: (
  //     <>
  //       <p>
  //         redux toolkit의 연습을 위해 만들어본 프로젝트입니다. redux toolkit으로 간단한 로그인 로그아웃을 해보고,
  //         아이템들을 카트에 추가하거나 제거해보고 아이템의 수량을 조절하는 것을 연습했습니다.
  //       </p>
  //       <p>
  //         스크롤의 양에 따라 헤더가 보이고 안보이는 것으로 바꿔보고 싶어서 시도해봤지만,
  //         헤더가 사라지면 헤더 안에 있던 my cart 부분이 함께 display: none이 되어 기존 강의의 내용대로 스크롤이 생겨도 헤더는 사라지지 않게 했습니다.
  //       </p>

  //       <div className="velog">
  //         <h4>관련 내용 정리</h4>
  //         <ul>
  //           <li>
  //             <a href="https://velog.io/@greenbean/react%EC%97%90%EC%84%9C-Header-%EC%8A%A4%ED%81%AC%EB%A1%A4-%EC%9D%B4%EB%B2%A4%ED%8A%B8-feat.-Chat-GPT">헤더 스크롤 이벤트</a>

  //           </li>

  //         </ul>
  //       </div>
  //     </>),
  // },
  {
    id: 1,
    title: "Youtube(clone)",
    img: "/assets/img/youtube.png",
    code: "https://github.com/hallokay/youtube_clone",
    url: "https://645b3e3750f99f0724d6220a--prismatic-chaja-dd6e5d.netlify.app/",
    desc: (<>
      <p>
        RAPID API를 활용해 리액트로 API로 정보를 받아오는 연습을 했습니다.
        constants.js파일을 만들어 필요한 아이콘과 이미지를 관리하는 방법과
        fetchFromAPI을 만들어 공통으로 들어가는 부분을 정리하는 법도 배웠습니다.
        props를 통해 css를 조절해 재사용 가능한 컴포넌트를 만드는 방법도 배웠습니다.
        CSS는 material UI를 이용했습니다.
      </p>
      <div className="velog">
        <h4>관련 내용 정리</h4>
        <ul>
          <li>
            <a href="https://velog.io/@greenbean/%ED%8F%B4%EB%8D%94%EC%97%90%EC%84%9C-index.js%EB%A1%9C-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8-%ED%8C%8C%EC%9D%BC-%EA%B4%80%EB%A6%AC">index.js로 컴포넌트 파일 관리</a>
          </li>
          <li>
            <a href="https://velog.io/@greenbean/react-router-dom-v6-%EC%82%AC%EC%9A%A9-Outlet-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8%EB%A1%9C-%EB%A0%88%EC%9D%B4%EC%95%84%EC%9B%83-%EA%B4%80%EB%A6%AC">Outlet 컴포넌트로 레이아웃 관리</a>
          </li>
          <li><a href="https://velog.io/@greenbean/%EB%8D%B0%EC%9D%B4%ED%84%B0%EB%A5%BC-%EB%B0%9B%EC%95%84%EC%98%A4%EA%B8%B0%EB%A7%8C-%ED%95%98%EB%8A%94%EB%8D%B0%EB%8F%84-Redux%EB%82%98-RTK-Query%EB%A5%BC-%EC%82%AC%EC%9A%A9%ED%95%A0-%ED%95%84%EC%9A%94%EA%B0%80-%EC%9E%88%EB%8A%94%EA%B0%80">
            데이터를 받아오기만 하는데도 Redux나 RTK Query를 사용할 필요가 있는가
          </a></li>
        </ul>
      </div>
    </>)
    ,
  },




  // {
  //   id: 4,
  //   title: "redux toolkit 복습(진행중)",
  //   img: "",
  //   code: "",
  //   url: "",
  //   desc: (<p>
  //     redux toolkit에 대한 강의 내용 복습입니다. 
  //   </p>),
  // },
];
