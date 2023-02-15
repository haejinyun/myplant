import * as S from './Header.styled';

import { Link } from 'react-router-dom';

// 이 부분을 슬라이딩 사이드바로 바꿔보자,,,디자인이 구리다...

function Header() {
  return (
    <>
      <S.Header>
        <Link to='/' style={{ textDecoration: 'none', color: 'black' }}>
          <S.Logo>MY PLANTS</S.Logo>
        </Link>
        <S.Nav>
          <S.Headerui>
            <Link to='/FindMyPlantPage' style={{ textDecoration: 'none', color: 'black' }}>
              <S.Headerli>find my plant!</S.Headerli>
            </Link>
            <Link to='/CheckMyPlantPage' style={{ textDecoration: 'none', color: 'black' }}>
              <S.Headerli>check my plant!</S.Headerli>
            </Link>
          </S.Headerui>
        </S.Nav>
      </S.Header>
    </>
  );
}

export default Header;
