import React , { useState  } from "react";
import { Form, Input, FormGroup, Label, Button, Row, Col } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";




function Register(props) {

  const [email, setEmail] =useState('');
  const [fname, setFname] =useState('');
  const [rePassword, setRePassword] =useState('');
  const [password, setPassword] =useState('');
  const regAccount = {email: 'yafi0721@gmail.com',
  fname: 'm.',
  mname: 'yafi',
  lname: 'fahmi',
  password: 'yafi1234',
  password2: 'yafic00l'};
  

  function register(){
    if(!email){
        alert('Email cannot be empty!')
    }else if (email == regAccount.email){
        alert("Email already registered!")
    }else if (!fname){
        alert('Front Name cannot be empty!')
    }else if (!password){
        alert('Password cannot be empty!')
    }else if (password !== rePassword){
        alert("Password doesn't match!")
    }else {
        alert('Register success!')
    }
  }
  


  return (
    <div>
      <div className="container my-5">
        <h2 className="text-center">Register</h2>
        <div className="boxRegis col-10 offset-1 col-lg-4 offset-4 py-5">
          <Form id="register">
            <FormGroup className="mb-3">
              <Label for="email">Email</Label>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="Your email here..."
                onChange={(e)=>setEmail(e.target.value)}
              />
            </FormGroup>
            <Row form>
                <Col md={6}>
                <FormGroup>
                    <Label for="fname">First Name</Label>
                    <Input type="text" name="fname" id="fname" onChange={(e)=>setFname(e.target.value)}/>
                </FormGroup>
                </Col>
                <Col md={6}>
                <FormGroup>
                    <Label for="mname">Middle Name</Label>
                    <Input type="text" name="mname" id="mname" placeholder="(Optional)"/>
                </FormGroup>
                </Col>
                <Col md={6}>
                <FormGroup>
                    <Label for="lname">Last Name</Label>
                    <Input type="text" name="lname" id="lname" placeholder="(Optional)"/>
                </FormGroup>  
                </Col>
            </Row>
            <FormGroup className="mb-3">
              <Label for="password">Password</Label>
              <Input
                type="password"
                name="password"
                id="password"
                placeholder="Your password here..."
                onChange={(e)=>setPassword(e.target.value)}
              />
            </FormGroup>
            <FormGroup className="mb-5">
              <Label for="password2">Re-Type Password</Label>
              <Input
                type="password"
                name="password2"
                id="password2"
                placeholder="Re-enter your password..."
                onChange={(e)=>setRePassword(e.target.value)}
              />
            </FormGroup>
            <FormGroup inline>
              <Button onClick={register} color="success">Register</Button>
            </FormGroup>
          </Form>
        </div>
      </div>
    </div>
  );
}
export default Register;