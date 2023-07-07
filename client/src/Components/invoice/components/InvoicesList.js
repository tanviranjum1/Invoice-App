import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Alert from "react-bootstrap/Alert";
import { ReactComponent as Right } from "../../../assets/icon-arrow-right.svg";
import { Link } from "react-router-dom";

const InvoicesList = ({ item }) => {
  return (
    <Card key={item.id} style={{ marginBottom: "20px" }}>
      <Card.Body>
        <Row className=" d-flex align-items-center text-center">
          <Col className="fw-bold">#{item.id}</Col>
          <Col className="text-secondary">{item.paymentDue}</Col>
          <Col className="text-secondary">{item.clientName}</Col>
          <Col className="fw-bold">${item.total}</Col>
          <Col md={3}>
            {" "}
            <Alert
              variant={
                item.status === "paid"
                  ? "success"
                  : "draft"
                  ? "warning"
                  : "secondary"
              }
              className="text-capitalize"
            >
              {item.status}
            </Alert>
          </Col>
          <Col md={1}>
            {" "}
            <Link to={`/invoice/${item._id}`}>
              <Right />
            </Link>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default InvoicesList;
