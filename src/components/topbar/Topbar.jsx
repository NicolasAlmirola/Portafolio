import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { AiOutlineHome } from 'react-icons/ai';
import { BiBook } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';
import { BiMessageSquareDetail } from 'react-icons/bi';

const Topbar = () => {
    const [activeNav, setActiveNav] = useState('#home');

    const handleNavClick = (navId) => {
        setActiveNav(navId);
    };

    useEffect(() => {
        const handleScroll = () => {
            const homeSection = document.getElementById('home');
            const skillsSection = document.getElementById('skills');
            const experienceSection = document.getElementById('experience');
            const contactSection = document.getElementById('contact');

            const scrollY = window.scrollY;

            if (scrollY >= contactSection.offsetTop) {
                setActiveNav('#contact');
            } else if (scrollY >= experienceSection.offsetTop) {
                setActiveNav('#experience');
            } else if (scrollY >= skillsSection.offsetTop) {
                setActiveNav('#skills');
            } else if (scrollY >= homeSection.offsetTop) {
                setActiveNav('#home');
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <Nav>
            <a href="#home" onClick={() => handleNavClick('#home')} className={activeNav === '#home' ? 'active' : ''}><AiOutlineHome /></a>
            <a href="#skills" onClick={() => handleNavClick('#skills')} className={activeNav === '#skills' ? 'active' : ''}><RiServiceLine /></a>
            <a href="#experience" onClick={() => handleNavClick('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBook /></a>
            <a href="#contact" onClick={() => handleNavClick('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail /></a>
        </Nav>
    );
}

export default Topbar;

const Nav = styled.div`
    background: rgba(0, 0, 0, 0.3);
    width: max-content;
    display: block;
    z-index: 2;
    position: fixed;
    left: 95%;
    top: 40%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    border-radius: 3rem;
    backdrop-filter: blur(15px);

    @media (max-width: 640px) {
        display: none;
    }

    a {
        background: transparent;
        padding: 0.9rem;
        border-radius: 50%;
        display: flex;
        color: var(--color-light);
        font-size: 1.1rem;
    }

    a:hover {
        background: rgba(0, 0, 0, 0.8);
    }

    a.active {
        background: #FAB700;
        color: var(--color-white);
    }
`;
