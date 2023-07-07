import React, { useEffect, useState } from "react";
import InvoicesHeader from "../components/InvoicesHeader";
import axios from "axios";
import InvoicesList from "../components/InvoicesList";
import "./HomeScreen.css";

const HomeScreen = () => {
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    // fetch invoices.
    const fetchInvoices = async () => {
      try {
        const responseData = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/invoices`
        );
        console.log(responseData.data);
        setInvoices(responseData.data);
      } catch (err) {
        console.log("Error retrieving invoice");
      }
    };
    fetchInvoices();
  }, []);

  return (
    <>
      {invoices && (
        <div className="index">
          <InvoicesHeader size={invoices.length} />
          {invoices.map((item) => (
            <InvoicesList item={item} key={item._id} />
          ))}
        </div>
      )}
    </>
  );
};

export default HomeScreen;
