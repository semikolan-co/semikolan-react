import Landing from "../component/Landing";
import BongoCat from "../component/BongoCat";
import Projects from "../component/Projects";
import MainLayout from "../layouts/MainLayout";
export default function Initiatives() {
  return (
    <>
      <MainLayout title="Initiatives | SemiKolan">
        <Landing
          lottiename="achievements"
          redirect="#billi"
          p1=""
          p2="Our Initiatives"
          p3="Things we're building for the world!"
          buttontext="Have a Look"
        />
        <Projects />
        <BongoCat />
      </MainLayout>
    </>
  );
}
