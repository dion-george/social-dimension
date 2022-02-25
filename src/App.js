import './App.css';
import styled from 'styled-components';
import logo from './assets/img/couple-illustration.png';
import useWindowDimensions from './hooks';

const Nav = styled.div`
  height: ${props => props.height || 0}px;
`;

const HeroComponent = styled.header`
  background-color: #E16F7F;
  display: flex;
  justify-content: center;
  height: ${props => props.height || 0}px;
`;

const ImgWrapper = styled.div`
  justify-content: center;
`;

const IllustrationImg = styled.img`
  position: absolute;
  top: ${props => props.top || 0}px;
  height: ${props => props.height || 0}px;
`;

const Subtitle = styled.p`
  margin-top: 100px;
  font-family: 'Poppins', sans-serif;
  font-size: 28px;
`;

function App() {
  const { height: windowHeight, width } = useWindowDimensions();
  const NAV_HEIGHT = 100;
  const imgHeight = windowHeight - NAV_HEIGHT;

  return (
    <HeroComponent height={windowHeight}>
      {/* <ImgWrapper> */}
      <IllustrationImg src={logo} alt="Logo" height={imgHeight} top={NAV_HEIGHT}/>
      {/* </ImgWrapper> */}
      <Nav height={NAV_HEIGHT}>
        <p>social dimension</p>
      </Nav>
      <div>
        <Subtitle >
          before you tie the knot ..
        </Subtitle>

        <p className="title-bold">
          share the real you with your potential partner.
        </p>
      </div>
    
      
    </HeroComponent>
  );
}

export default App;
