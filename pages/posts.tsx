import { NextPage, NextPageContext } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import MainLayout from "../components/MainLayout/MainLayout";
import { MyPost } from "../interfaces/post";

interface PostsPageProps {
  posts: MyPost[];
}

const Posts = ({ posts: serverPosts }: PostsPageProps) => {
  const [posts, setPosts] = useState(serverPosts);

  useEffect(() => {
    async function load() {
      const response = await fetch(`${process.env.API_URL}/posts`);
      const data = await response.json();

      setPosts(data);
    }

    if (!serverPosts) {
      load();
    }
  }, []);

  if (!posts) {
    return (
      <MainLayout>
        <p>Loading...</p>
      </MainLayout>
    );
  }

  console.log(posts);
  // const [posts, setPosts] = useState([]);

  // useEffect(() => {
  //   async function load() {
  //     const response = await fetch("http://localhost:4200/posts");
  //     const json = await response.json();
  //     setPosts(json);
  //   }
  //   load();
  // }, []);
  return (
    <MainLayout>
      <div>Posts Page</div>
      {/* <pre>{JSON.stringify(posts, null, 2)}</pre> */}
      <ul>
        {posts?.map((item) => {
          return (
            <li key={item.id}>
              <Link href={`/post/[id]`} as={`/post/${item.id}`}>
                <a>{item.title}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </MainLayout>
  );
};

Posts.getInitialProps = async ({ req }: NextPageContext) => {
  if (!req) {
    return { posts: null };
  }
  const response = await fetch(`${process.env.API_URL}/posts`);
  const posts: MyPost[] = await response.json();

  return {
    posts,
  };
};

export default Posts;
