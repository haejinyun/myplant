import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  background-color: rgb(101, 136, 100);
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  height: 80px;
`;

export const Logo = styled.div`
  margin-left: 20px;
  font-size: 28px;
  font-weight: bolder;
  :hover {
    transition: 0.2s;
    transform: scale(1.03);
    color: rgb(221, 221, 221);
  }
`;

export const Nav = styled.div`
  margin-right: 20px;
`;

export const Headerui = styled.ul`
  display: flex;
  align-items: center;
  height: 100%;
`;

export const Headerli = styled.li`
  display: flex;
  font-size: 18px;
  font-weight: bolder;
  margin-right: 20px;
  align-items: center;
  height: 100%;
  :hover {
    transition: 0.2s;
    transform: scale(1.03);
    color: rgb(221, 221, 221);
  }
`;

export const LinkA = styled.a`
  text-decoration: none;
`;
