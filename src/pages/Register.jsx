import React, { Component, useContext, useState } from 'react';
import { AppComponentContext } from '../providers/AppComponentProvider';
import { Col, Row, Button, ButtonGroup, Form, FormGroup, Label, Input } from 'reactstrap';
import { ColoredLine, titleStyle } from '../layout/CSS';

const initialFormData = Object.freeze({
  firstname: '',
  lastname: '',
  male: '',
  female: '',
  email: '',
  username: '',
  password: '',
  altPassword: '',
  isPassword: false,
  address: '',
  altAddress: '',
  city: '',
  state: '',
  zip: '',
  phone: '',
  altPhone: '',
  adminY: '',
  adminN: '',
  joinY: '',
  joinN: '',
});

const Register = (props) => {

  const [storedData, setState] = useContext(AppComponentContext);
  const [formData, updateFormData] = React.useState(initialFormData);

  const handleChange = (e) => {
    updateFormData({
      ...formData,
      // Trimming any whitespace
      [e.target.name]: e.target.value.trim()
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData);
    // ... submit to API or something
    setState(storedData => ({ ...storedData = formData }));
    
    console.log(storedData);
    return storedData;
  };

  return (
    <>
      <div className="container">
        <h1 className="display-4" style={ titleStyle } > User Registration Form </h1>
        <ColoredLine color="#00A0D7"/>
      </div>
      
      <Form>
        <Row form>
          <Col sm="12" md="12" lg="3" xl="3">
            <FormGroup>
              <Label for="firstname"> First Name: </Label>
              <Input type="text" name="firstname" id="firstname" onChange={handleChange} placeholder="First Name..." />
            </FormGroup>
            <FormGroup>
              <Label for="lastname"> Last Name: </Label>
              <Input type="text" name="lastname" id="lastname" onChange={handleChange} placeholder="Last Name..." />
            </FormGroup>


            <Label for="genderCheck"> Select your birth gender: </Label><br />
            <FormGroup check inline>
              <Label check style={{ display: 'block', textAlign: 'center' }}>
                <Input type="checkbox" value="male" onChange={handleChange} /> 
                  Male
              </Label>
            </FormGroup>
            <FormGroup check inline>
              <Label check style={{ display: 'block', textAlign: 'center' }}>
                <Input type="checkbox" value="female" onChange={handleChange} /> 
                Female
              </Label>
            </FormGroup><br /><br />

            <FormGroup>
              <Label for="email"> Email: </Label>
              <Input type="email" name="email" id="email" onChange={handleChange} placeholder="Email..." />
            </FormGroup>
          </Col>

          <Col sm="12" md="12" lg="3" xl="3">
            <FormGroup>
              <Label for="username"> Username: </Label>
              <Input type="text" name="username" id="username" onChange={handleChange} placeholder="Username..." />
            </FormGroup>
            <FormGroup>
              <Label for="password"> Password: </Label>
              <Input type="password" name="password" id="password" onChange={handleChange} placeholder="Password..." />
            </FormGroup>
            <FormGroup>
              <Label for="confirmPassword"> Confirm Password: </Label>
              <Input type="password" name="confirmPassword" id="" vonChange={handleChange} placeholder="Confirm Password..." />
            </FormGroup>
            <FormGroup>
              <Label for="address"> Address: </Label>
              <Input type="text" name="address" id="address" vonChange={handleChange} placeholder="Address..." />
            </FormGroup>
          </Col>

          <Col sm="12" md="12" lg="3" xl="3">
            <FormGroup>
              <Label for="altAddress"> Apt / Suite / PO Box: </Label>
              <Input type="text" name="altAddress" id="altAddress" onChange={handleChange} placeholder="Apt/Suite/PO Box..." />
            </FormGroup>
            <FormGroup>
              <Label for="city"> City: </Label>
              <Input type="text" name="address" id="address" onChange={handleChange} placeholder="City..." />
            </FormGroup>
            <FormGroup>
              <Label for="state"> State: </Label>
              <Input type="text" name="state" id="state" onChange={handleChange} placeholder="State..." />
            </FormGroup>
            <FormGroup>
              <Label for="zip"> Zip Code: </Label>
              <Input type="text" name="zip" id="zip" onChange={handleChange} placeholder="Zip Code..." />
            </FormGroup>
          </Col> 

          <Col sm="12" md="12" lg="3" xl="3">
            <FormGroup>
              <Label for="phone"> Primary Phone Number: </Label>
              <Input type="text" name="phone" id="phone" onChange={handleChange} placeholder="Primary Phone..." />
            </FormGroup>
            <FormGroup>
              <Label for="altPhone"> Secondary Phone Number: </Label>
              <Input type="text" name="altPhone" id="altPhone" onChange={handleChange} placeholder="Alternate Phone..." />
            </FormGroup>
            
            <Label for="adminCheck"> Are you the family Admin? </Label><br />
            <FormGroup check inline>
              <Label check style={{ display: 'block', textAlign: 'center' }}>
                <Input type="checkbox" value="yes" onChange={handleChange} /> 
                  Yes
              </Label>
            </FormGroup>
            <FormGroup check inline>
              <Label check style={{ display: 'block', textAlign: 'center' }}>
                <Input type="checkbox" value="no" onChange={handleChange} /> 
                No
              </Label>
            </FormGroup><br /><br />
            <Label for="joinCheck"> New joining members info? </Label><br />
            <FormGroup check inline>
              <Label check style={{ display: 'block', textAlign: 'center' }}>
                <Input type="checkbox" value="yes" onChange={handleChange} /> 
                  Yes
              </Label>
            </FormGroup>
            <FormGroup check inline>
              <Label check style={{ display: 'block', textAlign: 'center' }}>
                <Input type="checkbox" value="no" onChange={handleChange} /> 
                No
              </Label>
            </FormGroup><br />
          </Col>
        </Row>
        
        <Row>
          <Col sm="12" md="12" lg="6" xl="6">
            <div className="buttons is-right">
              <ButtonGroup>
                <Button className="button is-info purpleBtn"> Clear </Button>
              </ButtonGroup>
            </div>
          </Col>
          <Col sm="12" md="12" lg="6" xl="6">
            <div className="buttons is-left">
              <ButtonGroup>
                <Button className="button is-success greenBtn" onClick={handleSubmit}> Submit </Button>
              </ButtonGroup>
            </div>
          </Col>
        </Row>
      </Form>
    </> 
  )
}

export default Register
export { storedData }
