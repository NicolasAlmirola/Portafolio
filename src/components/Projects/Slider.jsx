import React, { useRef } from 'react'
import Slider from 'react-slick';
import Project from './Project';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styled from 'styled-components';
import lge from '../assets/images/Proyectos/Lets-Go-English.jpg';
import mt from '../assets/images/Proyectos/Mini-Teaching.jpg';
import gta from '../assets/images/Proyectos/Gta.png'
import google from '../assets/images/Proyectos/Copia-de-google.png'

let data = [
    {
        img : lge,
        disc : "Líder y desarrollador de Let's Go English, Una plataforma e learning desarrollada para la educación virtual de inglés, basada en el sistema Neuro GBL.",
        demo : 'https://letsgoenglish.online/'
    },
    {
        img : mt,
        disc : "Líder y desarrollador de Mini Teaching, una plataforma de aprendizaje del idioma inglés gratuito, inspirado en plataformas de entretenimiento como Netflix, Amazon, HBO entre otras.",
        demo : 'https://miniteaching.letsgoneurogbl.com/'
    },
    {
      img : google,
      disc : "Pagina creada para la practica de HTML y CSS",
      demo : 'https://nicolasalmirola.github.io/Copia-de-Google/'
    },
    {
        img : gta,
        disc : "Pagina hecha para probar la funcionalidad del framework Bootstrap 5",
        demo : 'https://nicolasalmirola.github.io/Gta-Saga/'
    }
];

var settings = {
    className: "center",
    centerMode: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows : false,
    responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          centerMode : false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          centerMode : false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode : false
        }
      }
    ]
  };
const SliderComp = () => {
  const arrowRef = useRef(null);
    let sliderProject = "";
    sliderProject = data.map((item, i) => (
        <Project item = {item} key={i}/>
    ))
  return (
    <Container>
      <Slider ref={arrowRef} {...settings}>
      {sliderProject}
      </Slider>
      <Buttons>
        <button 
        onClick={() => arrowRef.current.slickPrev()}
        className='back'><IoIosArrowBack/></button>
        <button 
        onClick={() => arrowRef.current.slickNext()}
        className='next'><IoIosArrowForward/></button>
      </Buttons>
    </Container>
  )
}

export default SliderComp;

const Container = styled.div`
  position: relative;
`

const Buttons = styled.div`
  button{
    width: 2rem;
    height: 2rem;
    background-color: rgba(255, 255, 255, 0.100);
    cursor: pointer;
    color: #FAB700;
    border: none;
    position: absolute;
    top: 45%;
    right: -1rem;
  }

  .back{
    left: -1rem;
  }
`