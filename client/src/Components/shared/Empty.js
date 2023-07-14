import React, { Fragment } from "react";
import { ReactComponent as Ill } from "../../assets/illustration-empty.svg";

const Empty = () => {
  return (
    <div className="text-center">
      <Ill />
      <h1 className="x-large">There is nothing here</h1>
      <h3 className="large text-secondary">
        Create an invoice by clicking the <br />
        New Invoice button and get started
      </h3>
    </div>
  );
};

export default Empty;
