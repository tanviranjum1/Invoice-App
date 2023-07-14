import React, { useState } from "react";
import {
  Row,
  Col,
  Form,
  Dropdown,
  Offcanvas,
  Container,
  Button,
} from "react-bootstrap";
import "./CreateInvoice.css";
import AddItems from "./AddItems";

// send axios request here.
// form input take from empty.

const CreateInvoice = ({ show, handleClose }) => {
  // send request to axios.

  const [formData, setFormData] = useState({
    streetAddress: "",
    city: "",
    postCode: "",
    country: "",
    clientName: "",
    clientEmail: "",
    streetAddressTwo: "",
    cityTwo: "",
    postCodeTwo: "",
    countryTwo: "",
    invoiceDate: "",
    description: "",
  });

  const {
    streetAddress,
    city,
    postCode,
    country,
    clientName,
    clientEmail,
    streetAddressTwo,
    cityTwo,
    postCodeTwo,
    countryTwo,
    invoiceDate,
    description,
  } = formData;

  const [paymentTerms, setPaymentTerms] = useState("Net 30 days");

  const handleDropdown = (eventKey, event) => {
    event.preventDefault();
    const selectedText = event.target.innerText;
    setPaymentTerms(selectedText);
  };

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const storeToDb = async () => {
    try {
      //config since sending data.
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      console.log(formData, paymentTerms);
      // const res = await axios.put("/api/profile/education", formData, config);

      // const responseData = await axios.get(
      //   `${process.env.REACT_APP_BACKEND_URL}/invoices`
      // );
      // console.log(responseData.data);
      // setLoadedInvoices(responseData.data);
    } catch (err) {
      console.log("Error saving.");
    }
  };

  const onSubmit = (event) => {
    // send axios request.
    event.preventDefault();
    const buttonId = event.nativeEvent.submitter.id;
    storeToDb();
    if (buttonId === "savedraft") {
    } else if (buttonId === "savesend") {
    }
  };

  return (
    <Container>
      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="start"
        style={{ transform: "translateX(17%)", width: "40%" }}
        className="p-4 custom-offcanvas"
      >
        <Offcanvas.Header>
          <Offcanvas.Title>New Invoice</Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body>
          <p className="text-secondary">Bill Form </p>
          <Form onSubmit={onSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="text-secondary">Street Address</Form.Label>
              <Form.Control
                type="text"
                className="fw-bold"
                name="streetAddress"
                value={streetAddress}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-3"
              controlId="exampleForm.ControlInput2"
            >
              <Col>
                <Form.Label className="text-secondary">City</Form.Label>
                <Form.Control
                  type="text"
                  rows={1}
                  className="fw-bold"
                  name="city"
                  value={city}
                  onChange={handleChange}
                />
              </Col>
              <Col>
                <Form.Label className="text-secondary">Post Code</Form.Label>
                <Form.Control
                  type="text"
                  rows={1}
                  className="fw-bold"
                  name="postCode"
                  value={postCode}
                  onChange={handleChange}
                />
              </Col>
              <Col>
                <Form.Label className="text-secondary">Country</Form.Label>
                <Form.Control
                  type="text"
                  rows={1}
                  className="fw-bold"
                  name="country"
                  value={country}
                  onChange={handleChange}
                />
              </Col>
            </Form.Group>

            <p className="text-secondary">Bill To</p>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
              <Form.Label className="text-secondary">Client's Name</Form.Label>
              <Form.Control
                type="text"
                className="fw-bold"
                name="clientName"
                value={clientName}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
              <Form.Label className="text-secondary">Client's Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="e.g, email@example.com"
                className="fw-bold"
                name="clientEmail"
                value={clientEmail}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput5">
              <Form.Label className="text-secondary">Street Address</Form.Label>
              <Form.Control
                type="text"
                className="fw-bold"
                name="streetAddressTwo"
                value={streetAddressTwo}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-3"
              controlId="exampleForm.ControlInput6"
            >
              <Col>
                <Form.Label className="text-secondary">City</Form.Label>
                <Form.Control
                  type="text"
                  rows={1}
                  className="fw-bold"
                  name="cityTwo"
                  value={cityTwo}
                  onChange={handleChange}
                />
              </Col>
              <Col>
                <Form.Label className="text-secondary">Post Code</Form.Label>
                <Form.Control
                  type="text"
                  rows={1}
                  className="fw-bold"
                  name="postCodeTwo"
                  value={postCodeTwo}
                  onChange={handleChange}
                />
              </Col>
              <Col>
                <Form.Label className="text-secondary">Country</Form.Label>
                <Form.Control
                  type="text"
                  rows={1}
                  className="fw-bold"
                  name="countryTwo"
                  value={countryTwo}
                  onChange={handleChange}
                />
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-3"
              controlId="exampleForm.ControlInput7"
            >
              <Col>
                <Form.Label className="text-secondary">Invoice Date</Form.Label>
                <Form.Control
                  type="date"
                  placeholder="e.g, email@example.com"
                  className="fw-bold"
                  rows={1}
                  name="invoiceDate"
                  value={invoiceDate}
                  onChange={handleChange}
                />
              </Col>
              <Col>
                <Form.Label className="text-secondary">
                  Payment Terms
                </Form.Label>

                <Dropdown onSelect={handleDropdown}>
                  <Dropdown.Toggle variant="default" id="dropdown-basic">
                    {paymentTerms}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item eventKey="1">Net 15 days</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Net 30 days</Dropdown.Item>
                    <Dropdown.Item eventKey="3">Net 60 days</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Col>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput8">
              <Form.Label className="text-secondary">
                Project Description
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="e.g, Graphic Design Services"
                className="fw-bold"
                name="description"
                value={description}
                onChange={handleChange}
              />
            </Form.Group>

            <AddItems />
            <Row>
              <Col xs={3}>
                <Button variant="light" onClick={handleClose}>
                  Discard
                </Button>{" "}
              </Col>
              <Col>
                <Button variant="dark" type="submit" id="savedraft">
                  Save as Draft
                </Button>{" "}
              </Col>
              <Col>
                <Button variant="info" type="submit" id="savesend">
                  Save & Send
                </Button>{" "}
              </Col>
            </Row>
          </Form>
        </Offcanvas.Body>
      </Offcanvas>
    </Container>
  );
};

export default CreateInvoice;
