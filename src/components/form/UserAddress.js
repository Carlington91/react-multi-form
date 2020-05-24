import React from 'react';
import Main from '../Main';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';

const UserAddress = ({ values, onChange, nextStep, prevStep }) => {
  const continueStep = (e) => {
    e.preventDefault();
    nextStep();
  };

  const previous = (e) => {
    e.preventDefault();
    prevStep();
  };

  const { address, address2, city, state, zip } = values;
  return (
    <Main title='User Address'>
      <Col sm={8}>
        <Form>
          <FormGroup>
            <Label for='address'>Address</Label>
            <Input
              type='text'
              name='address'
              value={address}
              onChange={onChange}
              placeholder='1234 Main St'
            />
          </FormGroup>
          <FormGroup>
            <Label for='address2'>Address 2</Label>
            <Input
              type='text'
              name='address2'
              value={address2}
              onChange={onChange}
              placeholder='Apartment, studio, or floor'
            />
          </FormGroup>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for='city'>City</Label>
                <Input
                  type='text'
                  name='city'
                  value={city}
                  onChange={onChange}
                />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for='state'>State</Label>
                <Input
                  type='text'
                  name='state'
                  value={state}
                  onChange={onChange}
                />
              </FormGroup>
            </Col>
            <Col md={2}>
              <FormGroup>
                <Label for='exampleZip'>Zip</Label>
                <Input type='text' name='zip' value={zip} onChange={onChange} />
              </FormGroup>
            </Col>
          </Row>

          <div class='d-flex justify-content-between my-5'>
            <Button className='btn-primary' onClick={previous}>
              Previous
            </Button>
            <Button className='btn-primary' onClick={continueStep}>
              Next Step
            </Button>
          </div>
        </Form>
      </Col>
    </Main>
  );
};

export default UserAddress;
