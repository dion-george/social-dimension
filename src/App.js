import './App.css';
import styled from 'styled-components';
import logo from './assets/img/couple-illustration.png'; // Tell webpack this JS file uses this image

const Nav = styled.div`
  text-align: center;
  align-items: center;
  justify-content: center;
`;

const HeroComponent = styled.header`
  background-color: #E16F7F;
  display: flex;
`;

function App() {
  return (
    <HeroComponent>
      <Nav>
        <p>social dimension</p>
      </Nav>
      <header className="App-header">
        <p className="title-bold">
          share the real you with your potential partner.
        </p>
      </header>
      <img src={logo} alt="Logo" />
    </HeroComponent>
  );
}

export default App;
