import Landing from "../component/Landing";
import Work from "../component/Work";
import MainLayout from "../layouts/MainLayout";

export default function Showcase() {
  return (
    <>
      <MainLayout title="SemiKolan | Never Stop Building">
        <Landing
          lottiename="work"
          redirect="#work"
          p1="Ding Ding! Presenting"
          p2="Semikolan Showcase"
          p3="Collection of our projects"
          buttontext="View Projects"
        />
        <Work num="01." removeViewMore />
      </MainLayout>
    </>
  );
}
