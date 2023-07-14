import React, { useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";

const AddItems = () => {
  const [formData, setFormData] = useState({
    itemname: "",
    qty: "",
    price: "",
  });

  const { itemname, qty, price } = formData;

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const addItem = () => {
    console.log("Item added");
  };

  return (
    <div>
      <h5>Item List</h5>
      <Form.Group
        as={Row}
        className="mb-3"
        controlId="exampleForm.ControlInput10"
      >
        <Col>
          <Form.Label className="text-secondary">Item Name</Form.Label>
          <Form.Control
            type="text"
            className="fw-bold"
            name="itemname"
            value={itemname}
            onChange={handleChange}
          />
        </Col>
        <Col>
          <Form.Label className="text-secondary">Qty</Form.Label>
          <Form.Control
            type="number"
            className="fw-bold"
            name="qty"
            value={qty}
            onChange={handleChange}
          />
        </Col>
        <Col>
          <Form.Label className="text-secondary">Price</Form.Label>
          <Form.Control
            type="number"
            className="fw-bold"
            name="price"
            value={price}
            onChange={handleChange}
          />
        </Col>
        <Col>
          <Form.Label className="text-secondary">Total</Form.Label>
          <Form.Control
            type="number"
            className="fw-bold"
            readOnly
            value={price * qty}
          />
        </Col>
      </Form.Group>
      <div className="d-grid gap-2">
        <Button variant="light" className="wider-button" onClick={addItem}>
          + Add New Item
        </Button>
      </div>
    </div>
  );
};

export default AddItems;
