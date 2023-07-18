import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import DeleteInvoice from "./DeleteInvoice";
import axios from "axios";
import EditInvoice from "./EditInvoice";

import { ReactComponent as Left } from "../../../assets/icon-arrow-left.svg";

const ViewInvoice = ({ viewItem, handleBack, onDelete }) => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);

  const handleClose = () => {
    setShow(false);
  };

  const [editView, setEditView] = useState(false);

  const handleEditOpen = () => {
    setEditView(!editView);
  };

  const handleEditClose = () => setEditView(false);

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
    <div>
      <span onClick={handleBack} style={{ cursor: "pointer" }}>
        <Left /> Go back
      </span>
      <Card style={{ marginBottom: "20px" }}>
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
              <Button variant="light" onClick={handleEditOpen}>
                Edit
              </Button>{" "}
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
          <Row className="mb-3">
            <Col>
              #{viewItem.id}
              <br />
              {viewItem.description}
            </Col>
            <Col xs={2}>
              {viewItem.senderAddress.street}
              <br />
              {viewItem.senderAddress.city}
              <br />
              {viewItem.senderAddress.postCode}
              <br />
              {viewItem.senderAddress.country}
            </Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <p className="text-secondary mb-1">Invoice Date</p>
              {viewItem.createdAt}
              <p className="text-secondary mb-1">Payment Due</p>
              {viewItem.paymentDue}
            </Col>
            <Col className="text-secondary">
              <p className="mb-1">Bill To</p>
              <span className="text-dark">{viewItem.clientName}</span>
              <br />
              {viewItem.clientAddress.street}
              <br />
              {viewItem.clientAddress.city}
              <br />
              {viewItem.clientAddress.postCode}
              <br />
              {viewItem.clientAddress.country}
            </Col>
            <Col>
              <p className="text-secondary mb-1">Sent to</p>
              <span className="text-dark">{viewItem.clientEmail}</span>
            </Col>
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

          <div
            class="bg-dark text-white"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              height: "80px",
              padding: "0 10px",
            }}
          >
            Amount due <span className="display-6">{viewItem.total}</span>
          </div>
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
      {editView && (
        <EditInvoice
          editView={editView}
          editItem={viewItem}
          handleEditClose={handleEditClose}
          key={viewItem._id}
        />
      )}
    </div>
  );
};

export default ViewInvoice;
