import React from 'react'

import { InputGroup,FormGroup, Label, InputGroupAddon, InputGroupText, Input } from "reactstrap";
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import API from "./API";


const Register = () => {
   
  const handleSubmit = (event) => {
    event.preventDefault();
    const name = document.querySelector("input[name=name]").value;
    const email = document.querySelector("input[name=email]").value;
    API.post(`introduce`, { name, email})
      .then((res) => {
        alert(
          "Your Query has been registered success. Our Team will contact you soon"
        );
      })
      .catch(function (error) {
        console.log(error);
        alert(
          `We're Sorry, Your query has not been Registered \n
        It is happened due to -- ` + error
        );
      })
      .then(function () {
        // always executed
      });
  };
  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="10" lg="8" xl="8">
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <CForm onSubmit={handleSubmit}>
                  <center>
                    <h1>Introduce Yourself</h1>
                  </center>
                  <p className="text-muted mb-0">Personal Info</p>

                  <InputGroup className="mb-2 mt-1">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="fa fa-user p-1" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input name="name" placeholder="Name" required />
                  </InputGroup>
                  <InputGroup className="mb-2 mt-1">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="fa fa-user p-1" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input name="email" type="email" placeholder="Email"  required />
                  </InputGroup>
                  <InputGroup className="mb-2 mt-1">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="fa fa-user p-1" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input name="college" placeholder="College"  required />
                  </InputGroup>

                  <InputGroup className="mb-2 mt-1">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="fa fa-user p-1" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input name="branch" placeholder="Branch"  required />
                  </InputGroup>

                  <InputGroup className="mb-2 mt-1">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="fa fa-user p-1" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input name="year" placeholder="Year"  required />
                  </InputGroup>

                  <p className="text-muted mt-4 mb-0">Social Info</p>

                  <InputGroup className="mb-2 mt-1">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="fa fa-user p-1" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input name="linkedin" placeholder="Branch"  required />
                  </InputGroup>

                  <InputGroup className="mb-2 mt-1">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="fa fa-user p-1" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input name="github" placeholder="Year"  required />
                  </InputGroup>

                  <FormGroup>
                    <Label for="exampleText" className="text-muted mt-2">
                      About You
                    </Label>
                    <Input
                      type="textarea"
                      name="about"
                      id="exampleText"
                      placeholder="What I Am & What I do"
                     required />
                  </FormGroup>
                  <FormGroup>
                    <Label for="exampleText" className="text-muted mt-2">
                      About You
                    </Label>
                    <Input
                      type="textarea"
                      name="other"
                      id="exampleText"
                      placeholder="What I Am & What I do"
                    />
                  </FormGroup>

                  <FormGroup check>
                    <Label check>
                      <Input name="newsletter" type="checkbox" className="mt-1" />{" "}
                      Check me out
                    </Label>
                  </FormGroup>

                  <center>
                    <button
                    type="submit"
                      className=" btn btn-lg mt-3"
                      style={{
                        background: "var(--Navy)",
                        color: "var(--LightestSlate)",
                      }}
                      block
                    >
                      Create Account
                    </button>
                  </center>
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
}

export default Register
