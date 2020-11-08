import React, { Component, Fragment } from 'react'
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class RegisterUser extends Component {

  render() {
    return (
      <Fragment>
        <div>
          <h1> User Registration Form </h1>
        </div>
        <Form>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="firstname"> First Name: </Label>
                <Input type="text" name="firstname" id="firstname" placeholder="First Name..." />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="lastname"> Last Name: </Label>
                <Input type="text" name="lastname" id="lastname" placeholder="Last Name..." />
              </FormGroup>
            </Col>
          </Row>
          <Row form>
            <Col md={6}>
              <FormGroup check>
                <Label for="maleCheck" check> Male: </Label>
                <Input type="checkbox" name="check" id="maleCheck"/>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup check>
                <Label for="femaleCheck" check> Female: </Label>
                <Input type="checkbox" name="check" id="femaleCheck"/>
              </FormGroup>
            </Col>
          </Row>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="email"> Email: </Label>
                <Input type="email" name="email" id="email" placeholder="Email..." />
              </FormGroup>
            </Col>
          </Row>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="username"> Username: </Label>
                <Input type="text" name="username" id="username" placeholder="Username..." />
              </FormGroup>
            </Col>
          </Row>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="password"> Password: </Label>
                <Input type="password" name="password" id="password" placeholder="Password..." />
              </FormGroup>
            </Col>
          </Row>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="confirmPassword"> Confirm Password: </Label>
                <Input type="password" name="confirmPassword" id="" placeholder="Confirm Password..." />
              </FormGroup>
            </Col>
          </Row>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="address"> Address: </Label>
                <Input type="text" name="address" id="address" placeholder="Address..." />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="altAddress"> Apt / Suite / PO Box: </Label>
                <Input type="text" name="altAddress" id="altAddress" placeholder="Apt/Suite/PO Box..." />
              </FormGroup>
            </Col>
          </Row>
          <Row form>
            <Col md={4}>
              <FormGroup>
                <Label for="city"> City: </Label>
                <Input type="text" name="address" id="address" placeholder="Address..." />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="state"> State: </Label>
                <Input type="text" name="state" id="state" placeholder="State..." />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="zip"> Zip Code: </Label>
                <Input type="text" name="zip" id="zip" placeholder="Zip Code..." />
              </FormGroup>
            </Col>
          </Row>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="phone"> Primary Phone Number: </Label>
                <Input type="text" name="phone" id="phone" placeholder="Primary Phone..." />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="altPhone"> Secondary Phone Number: </Label>
                <Input type="text" name="altPhone" id="altPhone" placeholder="Alternate Phone..." />
              </FormGroup>
            </Col>
          </Row>
          <Row form>
            <Col md={6}>
              <FormGroup check>
                <Label for="adminYesCheck" check> Yes: </Label>
                <Input type="checkbox" name="adminYesCheck" id="adminYesCheck"/>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup check>
                <Label for="adminNoCheck" check> No: </Label>
                <Input type="checkbox" name="adminNoCheck" id="adminNoCheck"/>
              </FormGroup>
            </Col>
          </Row>
          <Row form>
            <Col md={6}>
              <FormGroup check>
                <Label for="updatesYesCheck" check> Yes: </Label>
                <Input type="checkbox" name="updatesYesCheck" id="updatesYesCheck"/>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup check>
                <Label for="updatesNoCheck" check> No: </Label>
                <Input type="checkbox" name="updatesNoCheck" id="updatesNoCheck"/>
              </FormGroup>
            </Col>
          </Row>
          <Row form>
            <Col md={6}>
              <FormGroup check>
                <Label for="joinYesCheck" check> Yes: </Label>
                <Input type="checkbox" name="joinYesCheck" id="joinYesCheck"/>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup check>
                <Label for="joinNoCheck" check> No: </Label>
                <Input type="checkbox" name="joinNoCheck" id="joinNoCheck"/>
              </FormGroup>
            </Col>
          </Row>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="comments"> Comments: </Label>
                <Input type="textarea" name="comments" id="comments" />
              </FormGroup>
            </Col>
          </Row>
        </Form> 
        <Row>
          <Button></Button>
          <Button></Button>
        </Row>
      </Fragment> 
    )
  }
}

export default RegisterUser;