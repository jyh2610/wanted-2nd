import { styled } from 'styled-components';

function Nav() {
  return (
    <NavDiv>
      <span>FaceBook/react</span>
    </NavDiv>
  );
}

export default Nav;

const NavDiv = styled.div`
  text-align: center;
  height: 50px;
`;
