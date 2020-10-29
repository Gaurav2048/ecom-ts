import React from 'react';
import styled from 'styled-components';
import SignIn from '../Components/Auth/SignIn';

const Section1 = styled.section`
  background: black;
  padding: 0.5em;
  color: white;
  flex-direction: column;
  font-weight: 400;
  display: flex;
  font-size: 18px;
`;

const Section = styled.section`
  background: black;
  padding: 0.5em;
  color: white;
  flex-direction: row;
  font-weight: 400;
  display: flex;
  font-size: 18px;
`;

const Div = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 30%;
  padding: 30px;
  flex: 1;
`;

const Capsules = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 5px;
  paddint-bottom: 5px;
  opacity: 0.8;
  border-radius: 8px;
  color: white;
`;

const FormDiv = styled(Div)`
  width: 70%;
  padding: 30px;
`;

const libraries = [
  {
    title: 'Redux',
    color: '#f00',
  },
  {
    title: 'React-Redux',
    color: '#0f0',
  },
  {
    title: 'Redux-Thunk',
    color: '#00f',
  },
  {
    title: 'Immer',
    color: '#ff0',
  },
  {
    title: 'Axios',
    color: '#0ff',
  },
  {
    title: 'Formik',
    color: '#00f',
  },
];

const Footer: React.FC = () => {
  return (
    <Section1>
      Created with TypeScript and React
      <Section>
        <Div>
          {libraries.map((library, index) => (
            <Capsules key={index}>{library.title}</Capsules>
          ))}
        </Div>
        <FormDiv>
          <SignIn />
        </FormDiv>
      </Section>
    </Section1>
  );
};

export default Footer;
