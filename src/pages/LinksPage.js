import Landing from "../component/Landing";
import Links from "../component/Links";
import MainLayout from "../layouts/MainLayout";

export default function LinksPage() {
  return (
    <>
      <MainLayout title="Links | Semikolan">
        <Landing
          lottiename="links"
          redirect="#links"
          p1=""
          p2="Links"
          p3="All in one Place"
          buttontext=""
        />
        <Links />
      </MainLayout>
    </>
  );
}
