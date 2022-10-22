import React from "react";
import * as S from './style';

import Header from "../../components/header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <S.Container>
        {children}
      </S.Container>
    </>
  );
};

export default Layout;
