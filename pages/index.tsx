import Link from "next/link";
import MainLayout from "../components/MainLayout/MainLayout";

const Index = () => {
  return (
    <MainLayout title={"Home page"}>
      <h1>hi bla bla</h1>

      <p>
        <Link href={"/about"}>
          <a>About</a>
        </Link>
      </p>
      <p>
        <Link href="/posts">
          <a>Posts</a>
        </Link>
      </p>
    </MainLayout>
  );
};

export default Index;
