import Link from "next/link";
import Router from "next/router";
import React from "react";
import MainLayout from "../../components/MainLayout/MainLayout";
import s from "./404.module.scss";

const ErrorPage = () => {
  const handleClick = () => {
    Router.push("/");
  };

  return (
    <MainLayout>
      <h1 className={s.error}>Error 404</h1>
      {/* <button onClick={handleClick}>Back to home</button> */}
      <Link href={"/"}>
        <a>Back to home </a>
      </Link>
    </MainLayout>
  );
};

export default ErrorPage;
