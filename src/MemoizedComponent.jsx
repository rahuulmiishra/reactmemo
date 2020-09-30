import React from "react";

const MemoizedComponent = (props) => {
  const { pet = {} } = props;
  const { name = "", owner = "" } = pet;
  return (
    <h1>
      {owner} has {name}
    </h1>
  );
};

export default React.memo(MemoizedComponent);
