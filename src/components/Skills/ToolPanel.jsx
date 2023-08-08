import React from "react";
import styled, { keyframes } from "styled-components";
import { AiFillCodepenCircle } from "react-icons/ai";
import { FaCheckCircle } from "react-icons/fa";
import { skills } from "./data";

const Skills = () => {
    return (
        <Container id="skills">
            <ContentContainer>
                <div className="container px-5 py-10 mx-auto">
                    <div className="text-center mb-20">
                        <LargeIconContainer>
                            <AiFillCodepenCircle className="w-12 h-12 inline-block mb-4" />
                        </LargeIconContainer>
                        <SkillTitle>
                            <SkillTitleText>Habilidades</SkillTitleText>
                            <SkillTitleDivider>&nbsp;y&nbsp;</SkillTitleDivider>
                            <SkillTitleText>Tecnologías</SkillTitleText>
                        </SkillTitle>
                        <SkillDescription>
                            Sumergido en el mundo de la creación web, he cultivado un conjunto diverso de habilidades en varias tecnologías clave. Mi enfoque se basa en combinar estas herramientas para tejer experiencias digitales cautivadoras y funcionales.
                        </SkillDescription>
                    </div>
                    <SkillsList>
                        {skills.map((skill, index) => (
                            <SkillItem key={index}>
                                <SkillSquare>
                                    <SkillIcon>
                                        <FaCheckCircle className="text-green-400 w-10 h-10" />
                                    </SkillIcon>
                                    <SkillText>{skill.title}</SkillText>
                                </SkillSquare>
                            </SkillItem>
                        ))}
                    </SkillsList>
                </div>
            </ContentContainer>
        </Container>
    );
};

export default Skills;

const slideUp = keyframes`
    0% {
        transform: translateY(50px);
        opacity: 0;
    }
    100% {
        transform: translateY(0);
        opacity: 1;
    }
`;

const Container = styled.div`
    background: #DCE8F2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 100%;
    animation: ${slideUp} 0.8s ease-in-out;

    @media (max-width: 768px) {
        padding: 2rem 0;
    }
`;

const ContentContainer = styled.div`
    background: #2C2C38;
    width: 100%;
    max-width: 1000px;
    border-radius: 50px;
    margin: 20px auto;
    padding: 2rem;
    color: white;
    text-align: center;
`;

const LargeIconContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 4rem;
    margin-bottom: 1rem;
`;

const SkillTitle = styled.div`
    display: flex;
    font-size: 1.5rem;
    align-items: center;
    justify-content: center;
    margin: 1rem;
`;

const SkillTitleText = styled.span`
    color: #FAB700;
`;

const SkillTitleDivider = styled.span`
    color: white;
`;

const SkillDescription = styled.p`
    font-size: 1rem;
    text-align: center;
    max-width: 800px;
    margin: 0 auto;
`;

const SkillsList = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    margin: 30px 0;
`;

const SkillItem = styled.div`
    flex: 1 1 calc(50% - 1rem);
    margin-bottom: 2rem;
    display: flex;
    justify-content: center;

    @media (max-width: 768px) {
        flex: 1 1 100%;
    }
`;

const SkillSquare = styled.div`
    width: 100%;
    background-color: rgba(248, 248, 248, 0.8);
    border-radius: 8px;
    padding: 1rem;
    display: flex;
    align-items: center;
    text-align: center;
    transition: transform 0.3s;
    cursor: pointer;

    &:hover {
        transform: translateY(-5px);
    }
`;

const SkillIcon = styled.div`
    margin-right: 0.5rem;
    color: #FAB700;
`;

const SkillText = styled.div`
    font-size: x-large;
    color: black;
`;
