import React, { useEffect, useState } from "react";
import InvoicesHeader from "../components/InvoicesHeader";
import axios from "axios";
import InvoicesList from "../components/InvoicesList";
import "./HomeScreen.css";
import ViewInvoice from "../components/ViewInvoice";

const HomeScreen = () => {
  const [loadedInvoices, setLoadedInvoices] = useState([]);
  const [showComponent, setShowComponent] = useState(false);
  const [viewItem, setViewItem] = useState(null);

  useEffect(() => {
    // fetch invoices.
    const fetchInvoices = async () => {
      try {
        const responseData = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/invoices`
        );
        console.log(responseData.data);
        setLoadedInvoices(responseData.data);
      } catch (err) {
        console.log("Error retrieving invoice");
      }
    };
    fetchInvoices();
  }, []);

  const handleForward = ({ item }) => {
    setViewItem(item);
    setShowComponent(true);
  };
  const handleBack = () => {
    setViewItem(null);
    setShowComponent(false);
  };

  const DeleteHandler = (deletedInvoiceId) => {
    // keep the onces not deleted.
    setLoadedInvoices((prevInvoices) =>
      prevInvoices.filter((invoice) => invoice._id !== deletedInvoiceId)
    );
    console.log(loadedInvoices);
    setShowComponent(false);
  };

  return (
    <div className="index">
      {loadedInvoices && showComponent == false ? (
        <>
          <InvoicesHeader size={loadedInvoices.length} />
          {loadedInvoices.map((item) => (
            <InvoicesList
              item={item}
              key={item._id}
              handleForward={handleForward}
            />
          ))}
        </>
      ) : (
        <ViewInvoice
          viewItem={viewItem}
          handleBack={handleBack}
          onDelete={DeleteHandler}
        />
      )}
    </div>
  );
};

export default HomeScreen;
