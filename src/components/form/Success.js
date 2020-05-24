import React from 'react';
import { useHistory } from 'react-router-dom';
import Main from '../Main';

const Success = () => {
  let history = useHistory();
  setTimeout(() => {
    history.push('/');
  }, 2000);
  return (
    <Main>
      <h1>Success</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente
        tempora, deleniti quisquam est excepturi facilis culpa nemo inventore
        cupiditate obcaecati distinctio eum. Totam vero iusto asperiores
        suscipit. Atque, officia nobis.
      </p>
    </Main>
  );
};

export default Success;
