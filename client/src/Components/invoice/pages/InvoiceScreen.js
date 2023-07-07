import React from "react";
import { useParams } from "react-router-dom";

const InvoiceScreen = () => {
  const params = useParams();

  console.log(params);

  return <div>userId is 👉️ {params.id}</div>;
};

export default InvoiceScreen;
