import styled from 'styled-components';

export const Navigation = styled.nav`
  height: 4.5em;
  width: 100%;
  position: relative;
  background-color: white;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: space-between;
  padding: 1em 2em;
  align-items: center;
`;

export const NavLogo = styled.h1`
  font-size: 1.5rem;
`;

export const NavLinks = styled.ul``;

export const NavLink = styled.a<{ active: boolean }>`
  border-bottom: ${({ active }) => (active ? '1px solid black' : '')};

  & + & {
    margin-left: 0.6em;
  }
`;
