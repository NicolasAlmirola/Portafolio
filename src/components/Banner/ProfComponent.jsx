import React from "react";
import styled from "styled-components";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { Slide } from "react-awesome-reveal";
import Person from '../assets/images/Banner/Foto.png';
import { AiFillGithub } from "react-icons/ai";
import CV from '../assets/docs/cv_meri_gogichashvili.82cf02170599d07714c9.pdf'

const ProfComponent = () => {
  return (
    <Container id="home">
      <Slide direction="left">
        <Texts>
          <h4>
            Hola <span className="yellow">Soy</span>
          </h4>
          <h1 className="yellow">Nicolas Velasco Almirola</h1>
          <h3>Front-End Developer</h3>
          <p>
          Soy un entusiasta del Front End con una obsesión saludable por la estética web. Aporto vida a las ideas a través de HTML, CSS, JavaScript y un toque de magia de React.
          </p>
          <Download>
          <a href={CV} download className="btn">
            Download CV
          </a>
          </Download>

          <Social>
            <p>Echa un vistazo</p>
            <div className="social-icons">
              <span>
                <a href="https://www.instagram.com/nicolas_velasco_almirola/" target="_blank" rel="noopener noreferrer">
                  <AiOutlineInstagram />
                </a>
              </span>
              <span>
                <a href="https://github.com/NicolasAlmirola" target="_blank" rel="noopener noreferrer">
                  <AiFillGithub />
                </a>
              </span>
              <span>
                <a href="https://www.linkedin.com/in/nicolas-velasco/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedinIn />
                </a>
              </span>
            </div>
          </Social>
        </Texts>
      </Slide>
      <Slide direction="right">
        <Profile>
          <img src={Person} alt="Foto" />
        </Profile>
      </Slide>
    </Container>
  );
};

export default ProfComponent;

const Container = styled.div`
  display: flex;
  gap: 2rem;
  padding-top: 3rem;
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  z-index: 1;
  @media (max-width: 840px) {
    width: 90%;
  }

  @media (max-width: 640px) {
    flex-direction: column;
  }
`;

const Texts = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  h4 {
    padding: 1rem 0;
    font-weight: 500;
  }
  h1 {
    font-size: 2rem;
    font-family: "Secular One", sans-serif;
    letter-spacing: 2px;
  }
  h3 {
    font-weight: 500;
    font-size: 1.2rem;
    padding-bottom: 1.2rem;
    text-transform: capitalize;
  }
  p {
    font-weight: 300;
  }

  button {
    padding: 0.7rem 2rem;
    margin-top: 3rem;
    cursor: pointer;
    background-color: #FAB700;
    border: none;
    color: #fff;
    font-weight: 500;
    filter: drop-shadow(0px 10px 10px #01be9551);
    :hover {
      filter: drop-shadow(0px 10px 10px #01be9570);
    }
  }
`;

const Social = styled.div`
  margin-top: 3rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  p {
    font-size: 0.9rem;
    @media (max-width: 690px) {
      font-size: 0.7rem;
    }
  }

  .social-icons {
    display: flex;
    align-items: center;
    gap: 1rem;
    span {
      width: 2.3rem;
      height: 2rem;
      clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
      background-color: #FAB700;
      position: relative;
      transition: transform 400ms ease-in-out;
      :hover {
        transform: rotate(360deg);
      }
    }

    a {
      color: #fff;
      position: absolute;
      top: 55%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;

const Profile = styled.div`
  img {
    width: 25rem;
    filter: drop-shadow(0px 10px 10px #01be9570);
    transition: transform 400ms ease-in-out;
    @media (max-width: 790px) {
      width: 20rem;
    }

    @media (max-width: 660px) {
      width: 18rem;
    }

    @media (max-width: 640px) {
      width: 100%;
    }
  }

  :hover img {
    transform: translateY(-10px);
  }
`;

const Download = styled.div`
  .btn {
    color: white;
    width: max-content;
    display: inline-block;
    color: #FAB700;
    padding: 0.75rem 1.2rem;
    border-radius: 0.4rem;
    cursor: pointer;
    border: 1px solid #FAB700;
    transition: var(--transition);
    text-decoration: none;
    margin: 20px 0 0 0;
  }

  .btn:hover {
    background-color: white;
    color: black;
    border-color: transparent;
  }
`;
