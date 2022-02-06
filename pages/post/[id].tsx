import { NextPageContext } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import MainLayout from "../../components/MainLayout/MainLayout";
import { MyPost } from "../../interfaces/post";

interface PostPageProps {
  post: MyPost;
}

const Post = ({ post: serverPost }: PostPageProps) => {
  const [post, setPost] = useState(serverPost);
  const router = useRouter();

  useEffect(() => {
    async function load() {
      const response = await fetch(
        `http://localhost:4200/posts/${router.query.id}`
      );
      const data = await response.json();

      setPost(data);
    }

    if (!serverPost) {
      load();
    }
  }, []);

  if (!post) {
    return (
      <MainLayout>
        <p>Loading...</p>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      {/* <div>Post page {router.query.id}</div> */}
      <div key={post.id}>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
        <Link href={"/posts"}>
          <a>Back to posts</a>
        </Link>
      </div>
    </MainLayout>
  );
};

// Post.getInitialProps = async ({ query, req }) => {
//   if (!req) {
//     return { post: null };
//   }
//   console.log(query);
//   const response = await fetch(`http://localhost:4200/posts/${query.id}`);
//   const post = await response.json();

//   return {
//     post,
//   };
// };

interface PostNextPageContext extends NextPageContext {
  query: {
    id: string;
  };
}

export async function getServerSideProps({ query, req }: PostNextPageContext) {
  console.log(query);

  const response = await fetch(`${process.env.API_URL}/posts/${query.id}`);
  const post: MyPost = await response.json();

  return { props: { post } };
}

export default Post;
