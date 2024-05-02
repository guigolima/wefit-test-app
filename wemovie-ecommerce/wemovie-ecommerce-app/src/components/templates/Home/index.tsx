import React from "react";

import PageContainer from "@/components/atoms/PageContainer";
import Header from "@/components/organisms/Header";
import MovieList from "@/components/organisms/MovieList";
import ContentBackground from "@/components/atoms/ContentBackground";

const HomeTemplate = () => {
  return (
    <PageContainer>
      <Header />
      <ContentBackground>
        <MovieList />
      </ContentBackground>
    </PageContainer>
  );
};

export default HomeTemplate;
