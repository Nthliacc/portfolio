import React from "react";
import { CoursesContainer, CoursesItem } from "./styled";

export const Courses = (props) => {
  return (
    <CoursesContainer>
      <CoursesItem background={"#024159"}>
        <h2>Graduação em Serviço Social na UnP</h2>
        <p>4 anos - 2017</p>
        <p>
          O curso de Serviço Social da UnP tem o objetivo de somar nas
          transformações que a sociedade exige, formando um profissional
          competente em seu exercício profissional, generalista em sua formação
          intelectual e cultural.
        </p>
      </CoursesItem>
      <CoursesItem background={"#025e73"}>
        <h2>Curso de Web Full Stack na Labenu</h2>
        <p>6 meses - 2020</p>
        <p>
          Programa imersivo de 6 meses, tempo integral e remoto, que forma
          Desenvolvedores Web Full Stack ou seja profissionais completos tanto
          no Back-End quanto no Front-End. A abordagem é toda baseada em
          projetos com desafios de construção de soluções.
        </p>
      </CoursesItem>
    </CoursesContainer>
  );
};
