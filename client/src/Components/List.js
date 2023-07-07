import React from "react";
import "./List.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Alert from "react-bootstrap/Alert";
import data from "../data.json";
import { ReactComponent as Plus } from "../assets/icon-plus.svg";
import { ReactComponent as Down } from "../assets/icon-arrow-down.svg";
import { ReactComponent as Right } from "../assets/icon-arrow-right.svg";

const List = () => {
  return (
    <div className="index">
      <Row className=" d-flex align-items-center">
        <Col md={7}>
          {" "}
          <h1>Invoices</h1>
          <p>There are {data.length} total invoices</p>
        </Col>
        <Col>
          {" "}
          Filter by status <Down />
        </Col>
        <Col>
          <Button>
            <Plus />
            New Invoice
          </Button>
        </Col>
      </Row>

      {data.map((item) => (
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
                    item.status == "paid"
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
                <Right />
              </Col>
            </Row>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default List;
