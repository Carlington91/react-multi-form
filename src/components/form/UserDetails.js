import React from 'react';
import Main from '../Main';
import { Button, Form, FormGroup, Label, Input, Col, Row } from 'reactstrap';

const UserDetails = ({ values, onChange, nextStep }) => {
  const continueStep = (e) => {
    e.preventDefault();
    nextStep();
  };
  const colors = ['Red', 'Blue', 'Green', 'Yellow', 'Orange'];
  const { firstname, lastname, email, tel, occupation, favoriteColor } = values;
  return (
    <Main title='User Details'>
      <Col sm={8}>
        <Form>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for='firstname'>First Name</Label>
                <Input
                  type='text'
                  name='firstname'
                  value={firstname}
                  onChange={onChange}
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for='lastname'>Last Name</Label>
                <Input
                  type='text'
                  name='lastname'
                  value={lastname}
                  onChange={onChange}
                />
              </FormGroup>
            </Col>
          </Row>
          <FormGroup>
            <Label for='email'>Email</Label>
            <Input
              type='email'
              name='email'
              value={email}
              onChange={onChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for='tel'>Phone</Label>
            <Input type='text' name='tel' value={tel} onChange={onChange} />
          </FormGroup>
          <FormGroup>
            <Label for='occupation'>Occupation</Label>
            <Input
              type='text'
              name='occupation'
              value={occupation}
              onChange={onChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for='favoriteColor'>Favorite Color</Label>
            <Input
              type='select'
              name='favoriteColor'
              value={favoriteColor}
              onChange={onChange}
            >
              <option>select...</option>
              {colors.map((color) => (
                <option>{color}</option>
              ))}
            </Input>
          </FormGroup>
          <div class='d-flex justify-content-end my-5'>
            <Button className='btn-primary' onClick={continueStep}>
              Next Step
            </Button>
          </div>
        </Form>
      </Col>
    </Main>
  );
};

export default UserDetails;
