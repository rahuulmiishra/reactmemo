import React from "react";

const DumbComponent = (props) => {
  const { pet = {} } = props;
  const { name = "", owner = "" } = pet;
  return (
    <h1>
      {owner} has {name}
    </h1>
  );
};

export default DumbComponent;
