import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import DeleteInvoice from "./DeleteInvoice";
import axios from "axios";

import { ReactComponent as Left } from "../../../assets/icon-arrow-left.svg";

const ViewInvoice = ({ viewItem, handleBack, onDelete }) => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);

  const handleClose = () => {
    setShow(false);
  };

  // Delete comment
  const confirmDeleteHandler = async () => {
    setShow(false);
    console.log("Delete it!");
    console.log(viewItem._id);
    console.log({ show });
    try {
      await axios.delete(
        `${process.env.REACT_APP_BACKEND_URL}/invoices/${viewItem._id}`,
        null,
        {}
      );
      console.log("delete successful");

      // to tweak loaded invoices once we delete the invoice.
      onDelete(viewItem._id);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <span onClick={handleBack}>
        <Left /> Go back
      </span>
      <Card key={viewItem.id} style={{ marginBottom: "20px" }}>
        <Card.Body>
          <Row className=" d-flex align-viewItems-center text-center">
            <Col>Status</Col>
            <Col md={3}>
              <Alert
                variant={
                  viewItem.status === "paid"
                    ? "success"
                    : viewItem.status === "draft"
                    ? "warning"
                    : "secondary"
                }
                className="text-capitalize"
              >
                {viewItem.status}
              </Alert>
            </Col>
            <Col>
              {" "}
              <Button variant="light">Edit</Button>{" "}
            </Col>
            <Col>
              {" "}
              <Button onClick={handleShow} variant="danger">
                Delete
              </Button>{" "}
            </Col>
          </Row>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Row>
            <Col>
              #{viewItem.id} {viewItem.description}
            </Col>
            <Col>
              {viewItem.senderAddress.street}
              {viewItem.senderAddress.city}
              {viewItem.senderAddress.postCode}
              {viewItem.senderAddress.country}
            </Col>
          </Row>
          <Row>
            <Col>
              Invoice Date {viewItem.createdAt} Payment Due{" "}
              {viewItem.paymentDue}
            </Col>
            <Col>
              Bill To {viewItem.clientName} {viewItem.clientAddress.street}
              {viewItem.clientAddress.city}
              {viewItem.clientAddress.postCode}
              {viewItem.clientAddress.country}
            </Col>
            <Col>Sent to {viewItem.clientEmail}</Col>
          </Row>

          <Table>
            <thead>
              <tr>
                <th>Item Name</th>
                <th>QTY</th>
                <th>Price</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {viewItem.items &&
                viewItem.items.map((data) => (
                  <tr>
                    <td>{data.name}</td>
                    <td>{data.quantity}</td>
                    <td>{data.price}</td>
                    <td>{data.total}</td>
                  </tr>
                ))}
            </tbody>
          </Table>

          <div>Amount due {viewItem.total}</div>
        </Card.Body>
      </Card>
      {show && (
        <DeleteInvoice
          show={show}
          handleClose={handleClose}
          confirmDeleteHandler={confirmDeleteHandler}
          id={viewItem.id}
        />
      )}
    </>
  );
};

export default ViewInvoice;
