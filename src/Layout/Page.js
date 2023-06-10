import { Landing, About, Projects, Resume } from "../components/index";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {Footer} from './index'

const Page = () => {
const navigate = useNavigate();


useEffect(() => {
  const handleScroll = () => {
    const { scrollY } = window;

    if (scrollY < 500) {
      navigate("/#home");
    } else if (scrollY < 1000) {
      navigate("/#about");
    } else if (scrollY < 2000) {
      navigate("/#resume");
    } else if (scrollY < 2500) {
      navigate("/#project");
    }
  };
      window.addEventListener("scroll", handleScroll);

 return () => {
   window.removeEventListener("scroll", handleScroll);
 };
  }, [navigate])
  return (
    <main>
      <Landing />
      <About />
      <Resume />
      <Projects />
      {/* <Footer/> */}
    </main>
  );
};

export default Page;