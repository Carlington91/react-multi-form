import React from 'react';
import Main from '../Main';
import { Button, ListGroup, ListGroupItem } from 'reactstrap';

const Confirm = ({ values, prevStep, nextStep }) => {
  const previous = (e) => {
    e.preventDefault();
    prevStep();
  };

  const continueStep = (e) => {
    e.preventDefault();
    nextStep();
  };

  const {
    firstname,
    lastname,
    email,
    tel,
    occupation,
    favoriteColor,
    address,
    address2,
    city,
    state,
    zip,
  } = values;

  return (
    <Main title='Confirm'>
      <ListGroup flush>
        <ListGroupItem>
          Name: {firstname} {lastname}
        </ListGroupItem>
        <ListGroupItem>Email: {email}</ListGroupItem>
        <ListGroupItem>Phone: {tel}</ListGroupItem>
        <ListGroupItem>Occupation: {occupation}</ListGroupItem>
        <ListGroupItem>Favorite Color: {favoriteColor}</ListGroupItem>
        <ListGroupItem>Address Line 1: {address}</ListGroupItem>
        <ListGroupItem>Address Line 2: {address2}</ListGroupItem>
        <ListGroupItem>City: {city}</ListGroupItem>
        <ListGroupItem>State: {state}</ListGroupItem>
        <ListGroupItem>Zip Code: {zip}</ListGroupItem>
      </ListGroup>
      <div class='d-flex justify-content-between my-5'>
        <Button className='btn-primary' onClick={previous}>
          Previous
        </Button>
        <Button className='btn-primary' onClick={continueStep}>
          Add User
        </Button>
      </div>
    </Main>
  );
};

export default Confirm;
