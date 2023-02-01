import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterSquare, } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:+91 7435052677">+91 7435052677</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:bhuvansoni1804@gmail.com">
            bhuvansoni1804@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Copyrights © 2022-2023 Innovating By TheBhuvan24 🤍</Slogan>
        </CompanyContainer>
        <SocialContainer>
        <SocialIcons href='https://github.com/TheBhuvan24'>
        <AiFillGithub size="3rem" /> 
      </SocialIcons>
      <SocialIcons href='https://www.linkedin.com/in/thebhuvansoni24/'>
        <AiFillLinkedin size="3rem" /> 
      </SocialIcons>
      <SocialIcons href='https://instagram.com/TheBhuvan24'>
        <AiFillInstagram size="3rem" /> 
      </SocialIcons>
      <SocialIcons href='https://twitter.com/TheBhuvan24'>
        <AiFillTwitterSquare size="3rem" />
      </SocialIcons>
     </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;