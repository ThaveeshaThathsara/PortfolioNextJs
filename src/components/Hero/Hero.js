import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi ! <br/>
        I'm Thaveesha Galagama
      </SectionTitle>
      <SectionText>
        <p>"Welcome to my portfolio, where I showcase my expertise as a front-end, back-end, and full-stack developer. Explore my projects to see how I turn innovative ideas into functional and dynamic digital solutions."</p>
      </SectionText>
      <Button onClick={() => window.location.href = "https://www.linkedin.com/in/thaveesha-galagama-aa8389252"}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;
