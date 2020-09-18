import React from 'react';
import { ProjectsContainer, ProjectTitle } from './styled';
import { ProjectItem } from './ProjectItem';
import laptop from '../../images/macbook_2x-.png';
import tablet from '../../images/ipad@2x.png';
import desktop from '../../images/imac@2x.png';
import { Button } from '@material-ui/core';
import { useStyles } from '../../components/MaterialTheme';

export const ProjectsPage = (props) => {
    const classes = useStyles()
    return (
        <ProjectsContainer id="projects">
            <ProjectTitle background={'#FFFFFF'} color={'black'}>Meus Projetos</ProjectTitle>
            <ProjectItem
                row={'row'}
                image={laptop}
                background={'#011726'}
                name={'Labex'}
                type={'Front-end'}
                description={'O curso de Serviço Social da UnP tem o objetivo de somar nas transformações que a sociedade exige, formando um profissional competente em seu exercício profissional, generalista em sua formação intelectual e cultural.'}
                button={'Ver no GitHub'}
            />
            <ProjectItem
                row={'row-reverse'}
                image={tablet}
                background={'#1b818c'}
                name={'Labook'}
                type={'Back-end'}
                description={'Programa imersivo de 6 meses, tempo integral e remoto, que forma Desenvolvedores Web Full Stack ou seja profissionais completos tanto no Back-End quanto no Front-End. A abordagem é toda baseada em projetos com desafios de construção de soluções.'}
                button={'Ver no GitHub'}
            />
            <ProjectItem
                row={'row'}
                background={'#025e73'}
                image={desktop}
                name={'Spotenu'}
                type={'Full Stack'}
                description={`Programa imersivo de 6 meses, tempo integral e remoto,
                que forma Desenvolvedores Web Full Stack ou seja
                profissionais completos tanto no Back-End quanto no
                Front-End. A abordagem é toda baseada em projetos com
                desafios de construção de soluções.`}
                button={'Ver no GitHub'}
            />
            <ProjectTitle background={'#024159'}>
                <Button 
                    classes={{ label: classes.label}}
                >   
                    mais projetos
                </Button>
            </ProjectTitle>
        </ProjectsContainer>
    );
};