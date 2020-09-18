import React from 'react';
import { ContactContainer, InfoPeople, Image } from './styled';
import carta from '../../images/group-3@2x.png';
import { Icons } from '../../components/Icons';

export const ContactPage = () => {
    return (
        <ContactContainer id="contact">
            <InfoPeople>
                <Image src={carta} />
                <h1>Contrate-me!</h1>
                <p>
                    Procuro oportunidade de trabalho onde eu possa aprender, me desenvolver e evoluir na minha carreia profissional.
                    <br/><br/>
                    E-mail para contato: n.athiccosta@gmail.com
                    <br></br>
                    Celular: (84) 98881-8151
                </p>
            </InfoPeople>
            <Icons 
                position={'row'} 
                size={'36px'}
            />
        </ContactContainer>
    );
};