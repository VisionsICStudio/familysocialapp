import { relativeTimeRounding } from 'moment';
import React, { Component } from 'react'
import { Col, Row, Button, ButtonGroup, Form, FormGroup, Label, Input } from 'reactstrap';
import { titleStyle } from '../layout/CSS';

export const ColoredLine = ({ color }) => (
  <hr style={{
    position: 'relative',
    top: 0,
    color: color,
    backgroundColor: color,
    height: 5
    }}
  />
);

class Register extends Component {

  render() {
    return (
      <>
        <div className="container">
          <h1 className="display-4" style={ titleStyle } > User Registration Form </h1>
          <ColoredLine color="#00A0D7"/>
        </div>
        
        <Form>
          <Row form>
            <Col md="3">
              <FormGroup>
                <Label for="firstname"> First Name: </Label>
                <Input type="text" name="firstname" id="firstname" placeholder="First Name..." />
              </FormGroup>
              <FormGroup>
                <Label for="lastname"> Last Name: </Label>
                <Input type="text" name="lastname" id="lastname" placeholder="Last Name..." />
              </FormGroup>


              <Label for="genderCheck"> Select your birth gender: </Label><br />
              <FormGroup check inline>
                <Label check style={{ display: 'block', textAlign: 'center' }}>
                  <Input type="checkbox" /> 
                   Male
                </Label>
              </FormGroup>
              <FormGroup check inline>
                <Label check style={{ display: 'block', textAlign: 'center' }}>
                  <Input type="checkbox" /> 
                  Female
                </Label>
              </FormGroup><br /><br />

              <FormGroup>
                <Label for="email"> Email: </Label>
                <Input type="email" name="email" id="email" placeholder="Email..." />
              </FormGroup>
            </Col>

            <Col md="3">
              <FormGroup>
                <Label for="username"> Username: </Label>
                <Input type="text" name="username" id="username" placeholder="Username..." />
              </FormGroup>
              <FormGroup>
                <Label for="password"> Password: </Label>
                <Input type="password" name="password" id="password" placeholder="Password..." />
              </FormGroup>
              <FormGroup>
                <Label for="confirmPassword"> Confirm Password: </Label>
                <Input type="password" name="confirmPassword" id="" placeholder="Confirm Password..." />
              </FormGroup>
              <FormGroup>
                <Label for="address"> Address: </Label>
                <Input type="text" name="address" id="address" placeholder="Address..." />
              </FormGroup>
            </Col>

            <Col md="3">
              <FormGroup>
                <Label for="altAddress"> Apt / Suite / PO Box: </Label>
                <Input type="text" name="altAddress" id="altAddress" placeholder="Apt/Suite/PO Box..." />
              </FormGroup>
              <FormGroup>
                <Label for="city"> City: </Label>
                <Input type="text" name="address" id="address" placeholder="Address..." />
              </FormGroup>
              <FormGroup>
                <Label for="state"> State: </Label>
                <Input type="text" name="state" id="state" placeholder="State..." />
              </FormGroup>
              <FormGroup>
                <Label for="zip"> Zip Code: </Label>
                <Input type="text" name="zip" id="zip" placeholder="Zip Code..." />
              </FormGroup>
            </Col> 

            <Col md="3">
              <FormGroup>
                <Label for="phone"> Primary Phone Number: </Label>
                <Input type="text" name="phone" id="phone" placeholder="Primary Phone..." />
              </FormGroup>
              <FormGroup>
                <Label for="altPhone"> Secondary Phone Number: </Label>
                <Input type="text" name="altPhone" id="altPhone" placeholder="Alternate Phone..." />
              </FormGroup>
              
              <Label for="adminCheck"> Are you the family Admin? </Label><br />
              <FormGroup check inline>
                <Label check style={{ display: 'block', textAlign: 'center' }}>
                  <Input type="checkbox" /> 
                   Yes
                </Label>
              </FormGroup>
              <FormGroup check inline>
                <Label check style={{ display: 'block', textAlign: 'center' }}>
                  <Input type="checkbox" /> 
                  No
                </Label>
              </FormGroup><br /><br />
              <Label for="joinCheck"> New joining members info? </Label><br />
              <FormGroup check inline>
                <Label check style={{ display: 'block', textAlign: 'center' }}>
                  <Input type="checkbox" /> 
                   Yes
                </Label>
              </FormGroup>
              <FormGroup check inline>
                <Label check style={{ display: 'block', textAlign: 'center' }}>
                  <Input type="checkbox" /> 
                  No
                </Label>
              </FormGroup><br />
            </Col>
          </Row>
          
          <Row>
            <Col xl="6">
              <div className="buttons is-right">
                <ButtonGroup>
                  <Button className="button is-info purpleBtn"> Clear </Button>
                </ButtonGroup>
              </div>
            </Col>
            <Col xl="6">
              <div className="buttons is-left">
                <ButtonGroup>
                  <Button className="button is-success greenBtn"> Submit </Button>
                </ButtonGroup>
              </div>
            </Col>
          </Row>
        </Form>
      </> 
    )
  }
}

export default Register;