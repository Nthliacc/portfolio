import { Button } from "@material-ui/core";
import React from "react";
import styled from "styled-components";

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 22px;
  p {
    font-size: 12px;
  }
  button {
    align-self: center;
    border-radius: 18px;
    width: 160px;
    background: #82d0d9;
  }
`;
export const Tech = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 90px);
  width: 90%;
  margin-top: 16px;
  p {
    font-size: 14px;
    padding: 5px;
    margin: 0 15px 15px 0;
    border-left: 4px solid #ffffff;
    border-radius: 5px;
  }
`;

export const AboutPage = () => {
  return (
    <AboutContainer>
      <p>
        No mundo profissional, sou uma desenvolvedora front-end, dedicada e
        experiente, fluente em diversas linguagens e ferramentas digitais. Mas
        além das linhas de código e das interfaces, há muito mais em mim.
      </p>
      <br />
      <p>
        Na esfera pessoal, sou uma pessoa expansiva, que busca equilibrar a vida
        com atividades que alimentam a alma. Gosto de explorar diferentes
        habilidades, desde o crochê até a pintura, encontrando paz e satisfação
        em cada projeto manual. Pedalar pelas ruas, dirigir sem destino, são
        momentos de liberdade e introspecção.
      </p>
      <br />
      <p>
        Sou uma coleção de experiências, sonhos e emoções. Sou a soma das minhas
        paixões e das minhas buscas. Sou uma eterna aprendiz, pronta para
        descobrir mais sobre o mundo e sobre mim mesma, a cada passo que dou.
        Quem sou eu? Uma mistura única de determinação, criatividade e
        curiosidade, em constante evolução.
      </p>
      <Tech>
        <p>Git</p>
        <p>HTML</p>
        <p>CSS</p>
        <p>AWS</p>
        <p>React</p>
        <p>Hooks</p>
        <p>MySQL</p>
        <p>NodeJS</p>
        <p>JavaScript</p>
        <p>TypeScript</p>
      </Tech>
      <Button variant="contained">CV em PDF</Button>
    </AboutContainer>
  );
};
