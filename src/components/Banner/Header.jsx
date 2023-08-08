import React, { useState } from 'react';
import styled from 'styled-components';
import logo from "../assets/images/Banner/Horizontal blanco.png";

const Header = () => {
    const [bar, setBar] = useState(false);

    const toggleBar = () => {
        setBar(!bar);
    };

    const closeMenuAndScroll = () => {
        setBar(false);
    };

    return (
        <Container bar={bar} id='Home'>
            <Logo>
                <span className='logo'>
                    <img src={logo} alt="Foto"/>
                </span>
            </Logo>
            <Nav bar={bar}>
                <NavItem><a href="#home" onClick={closeMenuAndScroll}>Home</a></NavItem>
                <NavItem><a href="#skills" onClick={closeMenuAndScroll}>Skills</a></NavItem>
                <NavItem><a href="#experience" onClick={closeMenuAndScroll}>Proyectos</a></NavItem>
                <NavItem><a href="tel:+573134284495">Contactame</a></NavItem>
            </Nav>
            <BarsButton onClick={toggleBar} bar={bar}>
                <div className="bar"></div>
            </BarsButton>
        </Container>
    );
}

export default Header;

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1280px;
    width: 80%;
    margin: 0 auto;
    padding: 1.5rem 0;
    position: relative;
    animation: header 500ms ease-in-out;
    
    @media (max-width: 840px) {
        width: 90%;
    }

    .bars {
        display: none;
    }

    @media (max-width: 640px) {
        .bars {
            width: 40px;
            height: 40px;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0.5rem;
            z-index: 100;

            .bar {
                position: absolute;
                width: 100%;
                height: 2px;
                background-color: ${props => props.bar ? "transparent" : "#fff"};
                transition: all 400ms ease-in-out;

                :before,
                :after {
                    content: "";
                    width: 100%;
                    height: 2px;
                    background-color: #fff;
                    position: absolute;
                }

                :before {
                    transform: ${props => props.bar ? "rotate(45deg)" : "translateY(10px)"};
                    transition: all 400ms ease-in-out;
                }

                :after {
                    transform: ${props => props.bar ? "rotate(-45deg)" : "translateY(-10px)"};
                    transition: all 400ms ease-in-out;
                }
            }
        }
    }
`;

const Logo = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;

    span {
        font-size: 1.8rem;
    }

    h1 {
        font-weight: 600;
        font-size: 1.2rem;
    }
`;

const Nav = styled.div`
    @media (max-width: 640px) {
        position: fixed;
        display: flex;
        flex-direction: column;
        background-color: black;
        inset: 0;
        justify-content: flex-end;
        font-size: 2rem;
        gap: 2rem;
        font-weight: 700;
        height: ${props => props.bar ? "100vh" : 0};
        transition: height 400ms ease-in-out;
        overflow: hidden;
        z-index: 100;
    }

    span {
        margin-right: 1rem;
        a {
            color: ${props => props.bar ? "#FAB700" : "#fff"};
            text-decoration: none;
            font-weight: 400;
            position: relative;

            :before {
                content: "";
                position: absolute;
                left: 0;
                right: 0;
                bottom: -5px;
                height: 2px;
                background-color: #fff;
                transform: scale(0);
                transform-origin: right;
                transition: transform 400ms ease-in-out;
            }

            :hover:before {
                transform: scale(1);
                transform-origin: left;
            }

            :hover {
                opacity: 0.7;
            }
        }
    }
`;

const BarsButton = styled.div`
    @media (max-width: 640px) {
        width: 40px;
        height: 40px;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0.5rem;
        z-index: 100;

        .bar {
            position: absolute;
            width: 100%;
            height: 2px;
            background-color: ${props => props.bar ? "transparent" : "#fff"};
            transition: all 400ms ease-in-out;

            :before,
            :after {
                content: "";
                width: 100%;
                height: 2px;
                background-color: #fff;
                position: absolute;
            }

            :before {
                transform: ${props => props.bar ? "rotate(45deg)" : "translateY(10px)"};
                transition: all 400ms ease-in-out;
            }

            :after {
                transform: ${props => props.bar ? "rotate(-45deg)" : "translateY(-10px)"};
                transition: all 400ms ease-in-out;
            }
        }
    }
`;

const NavItem = styled.span`
    margin-left: 1rem;
`;
