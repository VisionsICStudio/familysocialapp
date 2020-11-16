import React from "react";
import { withRouter, useHistory} from 'react-router-dom';
import { Col, Row, Button, ButtonGroup, Form, FormGroup, Input, Label } from 'reactstrap';
import { ColoredLine, titleStyle } from '../layout/CSS';

const Login = () => {

  let history = useHistory();
  
  const loginUser = () => {
    history.push("/dashboard/fullsailstudent");
  };

  return (
    <>
      <div className="container">
        <h1 className="display-4" style={ titleStyle } > User Login Form </h1>
        <ColoredLine color="#00A0D7"/>
      </div>
      <Row>
          <Col sm="12" md="12" lg="3" xl="3">

          </Col>

          <Col sm="12" md="12" lg="6" xl="6">
            <Form>
                <FormGroup>
                  <Label for="username"> Username: </Label>
                  <Input type="text" name="username" id="username" placeholder="Username..." />
                </FormGroup>
                <FormGroup>
                  <Label for="password"> Password: </Label>
                  <Input type="password" name="password" id="password" placeholder="Password..." />
                </FormGroup>
                <ButtonGroup>
                  <div className="">
                  <Button style={{ marginRight: 12 }} className="button is-info float-left purpleBtn" type="button">
                  Clear
                  </Button>
                  <Button className="button is-success float-left greenBtn" type="button" onClick={loginUser}>
                  Log in
                  </Button>
                  </div>
                </ButtonGroup>
            </Form>
          </Col>

          <Col sm="0" md="0" lg="3" xl="3">
          </Col>
      </Row>
    </>
  )
}

export default Login;
