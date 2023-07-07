import React from "react";
import "./InvoicesHeader.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { ReactComponent as Plus } from "../../../assets/icon-plus.svg";
import { ReactComponent as Down } from "../../../assets/icon-arrow-down.svg";

const InvoicesHeader = ({ size }) => {
  return (
    <div>
      <Row className=" d-flex align-items-center">
        <Col md={7}>
          {" "}
          <h1>Invoices</h1>
          <p>There are {size} total invoices</p>
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
    </div>
  );
};

export default InvoicesHeader;
