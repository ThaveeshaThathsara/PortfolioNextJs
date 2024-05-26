import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';
import { Section } from '../../styles/GlobalComponents';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
          <LinkColumn>
            <LinkTitle>Call</LinkTitle>
            <LinkItem href="tel:123-456-7890">074 032 0010</LinkItem>
          </LinkColumn>

          <LinkColumn>
            <LinkTitle>Email</LinkTitle>
            <LinkItem href="thaveeshathathsaragalagama@gmail.com">thaveeshathathsaragalagama@gmail.com</LinkItem>
          </LinkColumn>


      </LinkList>
    </FooterWrapper>
  );
};

export default Footer;
