import React from 'react';
import { DiDatabase, DiFirebase, DiGit, DiGoogleCloudPlatform, DiIonic, DiNodejs, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of technologies in the Full Stack Devlopment World.
      From Web 3.0 to Web 2.0
    </SectionText>
    <List>
        <ListItem>
          <DiReact size="3rem" />
          <ListContainer>
            <ListTitle>Front-End</ListTitle>
            <ListParagraph>Experience with  <br />HTML, CSS, JavaScript, React.js 
            </ListParagraph>
            </ListContainer>
        </ListItem>
        <ListItem>
          <DiDatabase size="3rem" />
          <ListContainer>
            <ListTitle>Back-End</ListTitle>
            <ListParagraph>Experience with  <br />NodeJs and Databases
            </ListParagraph>
            </ListContainer>
        </ListItem>
        <ListItem>
          <DiGit size="3rem" />
          <ListContainer>
            <ListTitle>Github</ListTitle>
            <ListParagraph>Experience with  <br /> tools like Git and Github
            </ListParagraph>
            </ListContainer>
        </ListItem>
    </List>
<SectionDivider />
  </Section>
);

export default Technologies;
