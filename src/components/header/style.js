import styled from "styled-components/macro";
import { NavLink } from "react-router-dom";

export const Header = styled.header`
  padding: 1.5rem 3rem 0;
  height: 78px;
`;

export const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.h2`
  font-size: 2rem;
`;

export const MobileNavbarIcons = styled.div`
  display: none;

  @media (max-width: 1000px) {
    display: flex;
  }
`;

export const MobileNavbarContent = styled.section`
  ${({ isOpenMenu }) => (isOpenMenu ? `display: flex` : `display: none`)}
`;

export const DesktopNavbarContent = styled.section`
  display: flex;

  @media (max-width: 1000px) {
    display: none;
  }
`;

export const NavbarList = styled.ul`
  display: flex;
  gap: 5rem;
`;

export const ItemList = styled.li`
  width: 7rem;
  font-size: 1.2rem;
`;

export const LinkList = styled(NavLink)`
  color: #ffffff;
  padding: 0.5rem 1rem;
  white-space: nowrap;

  :hover {
    border-radius: 20px;
    background-color: #7a3209;
    transition: 0.3s;
  }
`;
