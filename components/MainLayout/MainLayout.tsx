import Head from "next/head";
import Link from "next/link";
import React from "react";

const MainLayout: React.FunctionComponent<{
  children: React.ReactNode;
  title?: string;
}> = ({ children, title = "Next App" }) => {
  return (
    <div>
      <Head>
        <title>{title} | Next Course</title>
        <meta name="keywords" content="next, javascript, react" />
        <meta name="description" content="this is next tutorial" />
        <meta charSet="utf-8" />
      </Head>
      <nav>
        <ul>
          <li>
            <Link href="/">
              <a>Main</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="/posts">
              <a>Posts</a>
            </Link>
          </li>
        </ul>
      </nav>
      <main>{children}</main>
      {/* <style jsx global>{` */}
      <style jsx>{`
        nav {
          position: fixed;
          height: 90px;
          left: 0;
          right: 0;
          top: 0;
          background: #3d405b;
          text-align: center;
        }

        ul {
          display: flex;
          justify-content: space-around;
          align-items: center;
          list-style: none;
        }

        nav a {
          color: #fff;
          font-size: 40px;
          text-decoration: none;
        }

        nav a:hover {
          text-decoration: underline;
        }
        main {
          padding: 90px 0;
        }
      `}</style>
    </div>
  );
};

export default MainLayout;

// palette
// #f4f1de
// #e07a5f
// #3d405b
// #81b29a
// #f2cc8f
