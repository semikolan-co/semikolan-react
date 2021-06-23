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

const Register = () => {
  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="10" lg="8" xl="8">
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <CForm>
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
                    <Input placeholder="Name" />
                  </InputGroup>
                  <InputGroup className="mb-2 mt-1">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="fa fa-user p-1" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Email" />
                  </InputGroup>
                  <InputGroup className="mb-2 mt-1">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="fa fa-user p-1" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="College" />
                  </InputGroup>

                  <InputGroup className="mb-2 mt-1">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="fa fa-user p-1" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Branch" />
                  </InputGroup>

                  <InputGroup className="mb-2 mt-1">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="fa fa-user p-1" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Year" />
                  </InputGroup>

                  <p className="text-muted mt-4 mb-0">Social Info</p>

                  <InputGroup className="mb-2 mt-1">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="fa fa-user p-1" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Branch" />
                  </InputGroup>

                  <InputGroup className="mb-2 mt-1">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="fa fa-user p-1" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Year" />
                  </InputGroup>

                  <FormGroup>
                    <Label for="exampleText" className="text-muted mt-2">
                      About You
                    </Label>
                    <Input
                      type="textarea"
                      name="text"
                      id="exampleText"
                      placeholder="What I Am & What I do"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="exampleText" className="text-muted mt-2">
                      About You
                    </Label>
                    <Input
                      type="textarea"
                      name="text"
                      id="exampleText"
                      placeholder="What I Am & What I do"
                    />
                  </FormGroup>

                  <FormGroup check>
                    <Label check>
                      <Input type="checkbox" className="mt-1" /> Check me out
                    </Label>
                  </FormGroup>

                  <center>
                    <CButton
                      className="mt-3"
                      style={{
                        background: "var(--Navy)",
                        color: "var(--LightestSlate)",
                      }}
                      block
                    >
                      Create Account
                    </CButton>
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
