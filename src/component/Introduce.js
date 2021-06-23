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
          "You have sucessfully submitted your details."
        );
        window.location.replace('/')
      })
      .catch(function (error) {
        console.log(error);
        alert(
          `We're Sorry, Your details have not been submitted yet. \n
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
                        <i className="fa fa-envelope p-1" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input name="email" type="email" placeholder="Email"  required />
                  </InputGroup>
                  <InputGroup className="mb-2 mt-1">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="fa fa-university p-1" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input name="college" placeholder="College"  required />
                  </InputGroup>

                  <InputGroup className="mb-2 mt-1">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="fa fa-graduation-cap p-1" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input name="branch" placeholder="Branch"  required />
                  </InputGroup>

                  <InputGroup className="mb-2 mt-1">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="fa fa-calendar-week p-1" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input name="year" placeholder="Year"  required />
                  </InputGroup>

                  <p className="text-muted mt-4 mb-0">Social Info</p>

                  <InputGroup className="mb-2 mt-1">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="fa fa-linkedin p-1" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input name="linkedin" placeholder="Linkedin Profile URL"  required />
                  </InputGroup>

                  <InputGroup className="mb-2 mt-1">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="fa fa-github p-1" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input name="github" placeholder="Github Account Username/URL"  required />
                  </InputGroup>

                  <FormGroup>
                    <Label for="exampleText" className="text-muted mt-2">
                      Tell us about your technological interests (For ex. Web Dev, App Dev, Machine Learning, Graphic Design etc.):
                    </Label>
                    <Input
                      type="textarea"
                      name="about"
                      id="exampleText"
                      placeholder="Blockchain, Graphic Design"
                     required />
                  </FormGroup>
                  <FormGroup>
                    <Label for="exampleText" className="text-muted mt-2">
                      Tell us about the tools and languages you're currently using or want to learn:
                    </Label>
                    <Input
                      type="textarea"
                      name="other"
                      id="exampleText"
                      placeholder="HTML, CSS, JavaScript, React.js and c++"
                    />
                  </FormGroup>

                  <FormGroup check>
                    <Label check>
                      <Input name="newsletter" type="checkbox" className="mt-1" />{" "}
                      Subscribe to the Semikolan weekly Newsletter
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
                      Submit
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
