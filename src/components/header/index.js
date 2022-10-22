import React, { useState } from "react";
import * as S from "./style";

import { IconContext } from "react-icons";
import { IoCloseSharp } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const renderNavbarList = () => (
    <S.NavbarList>
      <S.ItemList>
        <S.LinkList to="/">início</S.LinkList>
      </S.ItemList>
      <S.ItemList>
        <S.LinkList to="/about">sobre mim</S.LinkList>
      </S.ItemList>
      <S.ItemList>
        <S.LinkList to="/projects">projetos</S.LinkList>
      </S.ItemList>
      <S.ItemList>
        <S.LinkList to="/contacts">contato</S.LinkList>
      </S.ItemList>
    </S.NavbarList>
  );

  return (
    <S.Header>
      <S.Navbar>
        <S.Logo>dheniffe.</S.Logo>
        <S.MobileNavbarIcons>
          <IconContext.Provider value={{ size: "2.5rem" }}>
            {isOpenMenu ? (
              <IoCloseSharp onClick={() => setIsOpenMenu(false)} />
            ) : (
              <GiHamburgerMenu onClick={() => setIsOpenMenu(true)} />
            )}
          </IconContext.Provider>
        </S.MobileNavbarIcons>
        <S.MobileNavbarContent isOpenMenu={isOpenMenu}>
          {isOpenMenu && renderNavbarList()}
        </S.MobileNavbarContent>
        <S.DesktopNavbarContent>{renderNavbarList()}</S.DesktopNavbarContent>
      </S.Navbar>
    </S.Header>
  );
};

export default Header;
