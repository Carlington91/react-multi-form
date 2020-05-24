import React from 'react';
import { Container } from 'reactstrap';

const Main = ({ children, title }) => {
  return (
    <main>
      <div className='page-title py-5'>
        <Container>
          {' '}
          <h1>{title}</h1>
        </Container>
      </div>

      <Container>{children}</Container>
    </main>
  );
};

export default Main;
