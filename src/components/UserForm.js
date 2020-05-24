import React, { useState } from 'react';
import UserDetails from './UserDetails';
import UserAddress from './UserAddress';
import Confirm from './Confirm';
import Success from './Success';

const UserForm = () => {
  const [user, setUser] = useState({
    step: 1,
    firstname: '',
    lastname: '',
    email: '',
    tel: '',
    favoriteColor: '',
    occupation: '',
    address: '',
    address2: '',
    city: '',
    state: '',
    zip: '',
  });

  //next step
  const nextStep = () => {
    setUser({
      ...user,
      step: user.step + 1,
    });
  };

  //previous step
  const prevStep = () => {
    setUser({
      ...user,
      step: user.step - 1,
    });
  };

  //on fields change
  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const { step } = user;
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
  } = user;
  const values = {
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
  };

  switch (step) {
    case 1:
      return (
        <UserDetails nextStep={nextStep} onChange={onChange} values={values} />
      );
    case 2:
      return (
        <UserAddress
          nextStep={nextStep}
          prevStep={prevStep}
          onChange={onChange}
          values={values}
        />
      );
    case 3:
      return (
        <Confirm nextStep={nextStep} prevStep={prevStep} values={values} />
      );
    case 4:
      return <Success />;
    default:
      break;
  }
};

export default UserForm;
