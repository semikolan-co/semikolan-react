import BongoCat from "../component/BongoCat";
import MainLayout from "../layouts/MainLayout";

export default function UnderConstruction() {
  return (
    <>
      <MainLayout title="Under Construction | SemiKolan">
        <BongoCat
          bongoTopMessage="Oops! This page is under construction🙁"
          bongoBottomMessage="Our Bongo Cat is working hard to make it as awesome as possible."
        />
      </MainLayout>
    </>
  );
}
