import React, { useState } from "react";
import "./InvoicesHeader.css";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { ReactComponent as Plus } from "../../../assets/icon-plus.svg";
import { ReactComponent as Down } from "../../../assets/icon-arrow-down.svg";
import CreateInvoice from "./CreateInvoice";

const InvoicesHeader = ({ size }) => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);

  const handleClose = () => setShow(false);

  return (
    <>
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
          <Button onClick={handleShow}>
            <div
              style={{
                backgroundColor: "white",
                borderRadius: "50%",
                width: "32px",
                height: "32px",
                display: "inline",
              }}
            >
              <Plus />
            </div>
            New Invoice
          </Button>
        </Col>
      </Row>
      {show && <CreateInvoice show={show} handleClose={handleClose} />}
    </>
  );
};

export default InvoicesHeader;
