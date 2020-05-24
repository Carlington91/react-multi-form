import React from 'react';
import { Link } from 'react-router-dom';
import Main from './Main';

const Home = () => {
  return (
    <Main>
      <h1>Home</h1>
      <p>Ceating multi form with React</p>
      <Link to='/user' className='btn btn-primary'>
        Add User
      </Link>
    </Main>
  );
};

export default Home;
