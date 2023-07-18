import React, { useState, useEffect } from "react";
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
import { ReactComponent as Delete } from "../../../assets/icon-delete.svg";

// send axios request here.
// form input take from empty.
// get data of edit information.
// send edit request.
// overlay consider later and validation, design consider later.

const EditInvoice = ({ editView, handleEditClose, editItem }) => {
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

  useEffect(() => {
    setFormData({
      company: editItem.senderAddress.company,
      city: editItem.senderAddress.city,
      postCode: editItem.senderAddress.postCode,
      country: editItem.senderAddress.country,
      streetAddress: editItem.street,
      clientName: editItem.clientName,
      clientEmail: editItem.clientEmail,
      streetAddressTwo: editItem.clientAddress.street,
      cityTwo: editItem.clientAddress.city,
      postCodeTwo: editItem.clientAddress.postCode,
      countryTwo: editItem.clientAddress.country,
      invoiceDate: editItem.invoiceDate,
      items: editItem.items,
      description: editItem.description,
    });
  }, []);

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
    items,
  } = formData;

  const [paymentTerms, setPaymentTerms] = useState(editItem.paymentTerms);

  const handleDropdown = (eventKey, event) => {
    event.preventDefault();
    const selectedText = event.target.innerText;
    setPaymentTerms(selectedText);
  };
  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    // send axios request.
  };

  console.log(formData);

  return (
    <Container>
      <Offcanvas
        show={editView}
        onHide={handleEditClose}
        placement="start"
        style={{ transform: "translateX(17%)", width: "40%" }}
        className="p-4"
      >
        <Offcanvas.Header>
          <Offcanvas.Title>Edit Invoice</Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body>
          <p className="text-secondary">Bill Form </p>
          <Form>
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
                name="clientEmail"
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
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
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
                </Form.Group>
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
            <h5>Item List</h5>

            {items &&
              items.map((item) => {
                return (
                  <Form.Group
                    as={Row}
                    className="mb-3"
                    controlId="exampleForm.ControlInput10"
                  >
                    <Col xs={4}>
                      <Form.Label className="text-secondary">
                        Item Name
                      </Form.Label>
                      <Form.Control
                        type="text"
                        className="fw-bold"
                        name="itemname"
                        value={item.name}
                      />
                    </Col>
                    <Col xs={2}>
                      <Form.Label className="text-secondary">Qty</Form.Label>
                      <Form.Control
                        type="number"
                        className="fw-bold"
                        name="qty"
                        value={item.quantity}
                      />
                    </Col>
                    <Col xs={3}>
                      <Form.Label className="text-secondary">Price</Form.Label>
                      <Form.Control
                        type="number"
                        className="fw-bold"
                        name="price"
                        value={item.price}
                      />
                    </Col>
                    <Col xs={3}>
                      <Form.Label className="text-secondary">Total</Form.Label>
                      <Form.Control
                        type="number"
                        className="fw-bold"
                        readOnly
                        value={item.total}
                      />
                    </Col>
                    <Col xs={1}>
                      <Delete />
                    </Col>
                  </Form.Group>
                );
              })}
            <div className="d-grid gap-2">
              <Button variant="light" style={{ width: "100%" }}>
                + Add New Item
              </Button>
            </div>
          </Form>
        </Offcanvas.Body>
      </Offcanvas>
    </Container>
  );
};

export default EditInvoice;
