import Landing from "../component/Landing";
import About from "../component/About";
import Whatwedo from "../component/Whatwedo";
import Technologies from "../component/Technologies";
import semikolan from "../json/semikolan.json";
import MainLayout from "../layouts/MainLayout";

export default function AboutPage() {
  return (
    <>
      <MainLayout title="About | Semikolan">
        <Landing
          lottiename="about"
          redirect="#about"
          p1="This is all you need to know"
          p2="About Us"
          p3="Who we are & What we do"
          buttontext="Know more"
        />
        <About
          num="01."
          titleline="What is SemiKolan?&#129300;"
          content={semikolan.about.content}
          removeViewMore
        />
        <Whatwedo num="03." titleline="What we do" />
        <Technologies num="03." technologies={semikolan.technologies} />
      </MainLayout>
    </>
  );
}
