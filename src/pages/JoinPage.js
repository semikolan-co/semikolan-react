import Landing from "../component/Landing";
import Join from "../component/Join";
import MainLayout from "../layouts/MainLayout";

export default function JoinPage() {
  return (
    <>
      <MainLayout title="Join Us | Never Stop Building">
        <Landing
          lottiename="join"
          redirect="#work"
          p1="Currently, We are Building"
          p2="Our Own Ecosystem"
          p3="Till then Join us through"
          buttontext="Scroll Down"
        />
        <Join num="01." />
      </MainLayout>
    </>
  );
}
