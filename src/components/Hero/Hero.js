import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        Myself Bhuvan Soni.
        I am a Full Stack Web Developer with a passion for building
        websites and applications.
      </SectionText>
      <Button onClick={() => window.location = 'https://drive.google.com/file/d/1b_opVpcBVT2Auaqay_N5V7hdon3mBxEq/view?usp=share_link'} >Resume</Button>
    </LeftSection>
  </Section>
);

export default Hero;