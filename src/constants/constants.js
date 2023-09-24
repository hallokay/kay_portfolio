import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVimeo, faGithub } from "@fortawesome/free-brands-svg-icons";

export const mainImg = "/assets/img/img_main.jpg";
export const mainVideo = "/assets/img/video_main.mp4";

export const aboutMe = (
  <>
    <h2>Front-end 개발자 전진희 입니다.</h2>
    <p>
      저는 프론트엔드 개발자로서 <strong>1년의 경험</strong>을 가지고 있습니다.</p>
    <p>
      이전 회사에서는 프로젝트의 요구사항에 맞추어 Vue를 사용하여 CMS 페이지를
      개발한 경험이 있습니다.
    </p>
    <h2>현재</h2>
    <p>
      React를 공부하고 있습니다. 강의를 보며 React를 공부하면서 기본적인 react
      프로젝트를 진행해보았고, 아직 배우는 과정중에 있지만 상태관리를 위한 Redux-toolkit과 NEXT.JS를 공부하며 서버사이드 렌더링에 관한 부분도 익히고
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
          작업과 공대 학생들의 도움으로 아두이노를 통한 레고 작업, 웨어러블 등 사람이 경험하는 디지털
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
    id: 7,
    title: 'trello clone',
    img: '',
    code: 'https://github.com/hallokay/trello',
    url: '',
    desc: (<>
      <p>
        현재 작업중인 프로젝트입니다.
      </p>
    </>)

  },
  {
    id: 6,
    title: 'NEXT.js server action',
    img: '/assets/img/serveraction.jpg',
    code: 'https://github.com/hallokay/next_server_action',
    url: '',
    desc: (<>
      <p>
        mockAPI를 이용해
        Next.js 13의 새로운 기능인 server action에 대해 공부하며 products warehouse를 만들어보았습니다.

      </p>


      <div className="velog">
        <h4>
          내용 정리
        </h4>
        <ul>
          <li>
            <a href="https://velog.io/@greenbean/next.js-server-action" target="_blank" rel="noreferrer">next.js server action</a>

          </li>

        </ul>
      </div>
    </>)

  },
  {
    id: 5,
    title: "렌트카 사이트",
    img: '/assets/img/rent-car.jpg',
    code: 'https://github.com/hallokay/car_showcase_next.js',
    url: '',
    desc: (<>
      <p>
        Next.js, tailwind CSS를 이용해 만든 렌트카 렌딩페이지 입니다.
        Rapid API이용했고, 더보기 페이지를 눌러 데이터를 받아올 때마다 페이지가 새로고침 되어 맨 위로 올라가는 next.js의 버그가 있습니다.
      </p>
    </>)


  },

  {
    id: 4,
    title: "Netflix clone",
    img: "/assets/img/netflix_cloneImg.jpg",
    code: "https://github.com/hallokay/netflix",
    url: "https://netflix-2faa1.web.app/",
    desc: (<>
      <p>
        넷플릭스 페이지 클론입니다. react, reduxToolkit, firebase를 이용해 만들었습니다.
        firebase에서 구글 로그인이 아닌 방식으로 회원가입을 하고 로그인 하는 방법으로 구현했고,
        reduxToolkit으로 마음에 드는 영화 리스트를 저장할 수 있는 기능도 연습해볼 수 있었습니다.

      </p>


      <div className="velog">
        <h4>
          관련 내용 정리
        </h4>
        <ul>
          <li>
            <a href="https://velog.io/@greenbean/netflix-clone-movieSlice-%EC%BD%94%EB%93%9C-%EA%B0%9C%EC%84%A0-%EC%84%A4%EB%AA%85" target="_blank" rel="noreferrer">netflix movieSlice 코드 개선</a>

          </li>
          <li>
            <a href="https://velog.io/@greenbean/netflix-clone-main-page-%EC%BD%94%EB%93%9C-%EA%B0%9C%EC%84%A0" target="_blank" rel="noreferrer">main page 코드 개선</a>

          </li>
          <li>
            <a href="https://velog.io/@greenbean/netflix-clone-%ED%9A%8C%EA%B3%A0" target="_blank" rel="noreferrer">문제 해결과 회고</a>

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

        </p>
        <p>
          이 프로젝트를 통해 파이어베이스를 다뤄보고 파이어베이스를 이용해 구글 아이디로 로그인하는 방법과
          로그인한 유저정보를 리덕스로 저장하는 방법을 배웠습니다.

        </p>

        <div className="velog">
          <h4>
            관련 내용 정리
          </h4>

          <ul>
            <li>
              <a href="https://velog.io/@greenbean/react%EC%97%90%EC%84%9C-%EB%8D%B0%EC%9D%B4%ED%84%B0%EB%A5%BC-%EB%B0%9B%EC%95%84%EC%98%AC-%EB%95%8C-.Optional-Chaining.-%EB%AC%B8%EB%B2%95-feat.-chat-GPT" target="_blank" rel="noreferrer">옵셔널 체이닝</a>

            </li>
            <li>
              <a href="https://velog.io/@greenbean/%EB%A6%AC%EC%95%A1%ED%8A%B8-%EB%B9%84%EA%B5%AC%EC%A1%B0%ED%99%94-%ED%95%A0%EB%8B%B9" target="_blank" rel="noreferrer">
                비구조화 할당
              </a>
            </li>
          </ul>
        </div>
      </>),
  },

  {
    id: 1,
    title: "Youtube(clone)",
    img: "/assets/img/youtube.png",
    code: "https://github.com/hallokay/youtube_clone",
    url: "https://645b3e3750f99f0724d6220a--prismatic-chaja-dd6e5d.netlify.app/",
    desc: (<>
      <p>
        RAPID API를 활용한 youtube clone 입니다.
        constants.js파일을 만들어 필요한 아이콘과 이미지를 관리하는 방법과
        Outlet 컴포넌트로 레이아웃을 관리하는 방법에 대해 공부했습니다.
        CSS는 material UI를 이용했습니다.
      </p>
      <div className="velog">
        <h4>관련 내용 정리</h4>
        <ul>
          <li>
            <a href="https://velog.io/@greenbean/%ED%8F%B4%EB%8D%94%EC%97%90%EC%84%9C-index.js%EB%A1%9C-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8-%ED%8C%8C%EC%9D%BC-%EA%B4%80%EB%A6%AC" target="_blank" rel="noreferrer">index.js로 컴포넌트 파일 관리</a>
          </li>
          <li>
            <a href="https://velog.io/@greenbean/react-router-dom-v6-%EC%82%AC%EC%9A%A9-Outlet-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8%EB%A1%9C-%EB%A0%88%EC%9D%B4%EC%95%84%EC%9B%83-%EA%B4%80%EB%A6%AC" target="_blank" rel="noreferrer">Outlet 컴포넌트로 레이아웃 관리</a>
          </li>
          <li><a href="https://velog.io/@greenbean/%EB%8D%B0%EC%9D%B4%ED%84%B0%EB%A5%BC-%EB%B0%9B%EC%95%84%EC%98%A4%EA%B8%B0%EB%A7%8C-%ED%95%98%EB%8A%94%EB%8D%B0%EB%8F%84-Redux%EB%82%98-RTK-Query%EB%A5%BC-%EC%82%AC%EC%9A%A9%ED%95%A0-%ED%95%84%EC%9A%94%EA%B0%80-%EC%9E%88%EB%8A%94%EA%B0%80" target="_blank" rel="noreferrer">
            데이터를 받아오기만 하는데도 Redux나 RTK Query를 사용할 필요가 있는가
          </a></li>
        </ul>
      </div>
    </>)
    ,
  },





];
