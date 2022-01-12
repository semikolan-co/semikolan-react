import Error404 from "../component/Error404";
import MainLayout from "../layouts/MainLayout";

export default function Error404Page() {
  return (
    <>
      <MainLayout title="Error 404 | SemiKolan">
        <Error404 />
      </MainLayout>
    </>
  );
}
