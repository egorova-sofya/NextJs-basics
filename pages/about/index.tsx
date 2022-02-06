import Router from "next/router";
import { useEffect, useState } from "react";
import MainLayout from "../../components/MainLayout/MainLayout";

interface TitlePageProps {
  title: string;
}

const About = ({ title }: TitlePageProps) => {
  const handleClick = () => {
    Router.push("/");
  };

  return (
    <MainLayout title={"About page"}>
      <h1>{title}</h1>

      <button onClick={handleClick}>Go back to home</button>
    </MainLayout>
  );
};

About.getInitialProps = async () => {
  const response = await fetch(`${process.env.API_URL}/about`);
  const aboutData = await response.json();

  return {
    title: aboutData.title,
  };
};

export default About;
