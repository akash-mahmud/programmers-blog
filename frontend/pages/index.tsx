import Seo from "@/components/common/Seo";
import Tabs from "@/components/home/Tabs";
import { catagoryReposnce } from "@/types/category";
import { homepageProps } from "@/types/home";
import { GetStaticProps, NextPage } from "next";
import React from "react";
import { fetchCategories } from "../http";

const Home: NextPage<homepageProps> = ({ categories }: homepageProps) => {
  return (
    <>
      <Seo
        title="Programmers blog"
        description="This is the home page of the programmers blog website"
      />
      <Tabs/>
    </>
  );
};
export const getStaticProps: GetStaticProps = async () => {
  let categories: catagoryReposnce[] =[];

  const data = await fetchCategories();

  if (typeof data !== "string") {
    categories = data.data;
  }

  return {
    props: {
      categories: categories,
    },
  };
};
export default Home;
