import React from 'react';
import styled from 'styled-components';
import linkedin from '../images/linked.png';
import whats from '../images/whats.png';
import git from '../images/git.png';
import twiter from '../images/twitter.png';
import insta from '../images/insta.png';
import { Button } from '@material-ui/core';

const Icon = styled.div`
    display: flex;
    flex-direction: ${props => props.direction};
    position: ${props => props.position};
    margin: ${props => props.margin};
`;
const IconItem = styled.img`
    height: ${props => props.size};
    margin: 6px;
    :hover{
        color: #f2b33e;
      }
`;

export const Icons = (props) => {
    return (
        <Icon
            direction={props.direction}
            position={props.position}
            margin={props.margin}
        >
            <Button href={'https://www.linkedin.com/in/nthlia-costa/'}>
                <IconItem
                    src={linkedin}
                    size={props.size} />
            </Button>
            <Button href={'https://api.whatsapp.com/send?phone=5584988818151&text=Olá!'}>
                <IconItem
                    src={whats}
                    size={props.size} />
            </Button>
            <Button href={'https://github.com/Nthliacc'}>
                <IconItem
                    src={git}
                    size={props.size} />
            </Button>
            <Button href={'https://twitter.com/nthliacc'}>
                <IconItem
                    src={twiter}
                    size={props.size} />
            </Button>
            <Button href={'https://www.instagram.com/nthliacc/'}>
                <IconItem
                    src={insta}
                    size={props.size} />
            </Button>
        </Icon>
    );
};