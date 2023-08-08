import styled from "styled-components";
import Header from "./components/Banner/Header";
import ProfComponent from "./components/Banner/ProfComponent";
import Footer from "./components/Footer/Footer";
import Projects from "./components/Projects/Projects";
import ToolPanel from './components/Skills/ToolPanel'
import Espaciado from './components/Separador/Espaciado'
import Topbar from './components/topbar/Topbar'; // Corrección en esta línea

function App() {
  return (
    <Container>
      <Banner>
        <Header />
        <ProfComponent />
      </Banner>

      <Topbar/>

      <ToolPanel/>

      <LightColor>
        <Projects />
      </LightColor>

      <Espaciado/>
      <LightColor>
        <Footer />
      </LightColor>
    </Container>
  );
}

export default App;

const Container = styled.div``;
const Banner = styled.div`
  background: #000000;
  height: 800px;
  @media (max-width: 640px) {
    height: 100%;
    padding-bottom: 2rem;
  }
`;

const LightColor = styled.div`
  background: #000000;
`;
