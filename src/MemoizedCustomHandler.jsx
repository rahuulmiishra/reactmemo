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

const areEqual = (prevProps, nextProps) => {
  // write you comparison logic. This function must return true if both props are equal
  // in order to prevent re-rendering
  return true;
};

export default React.memo(MemoizedComponent, areEqual(prevProps, nextProps));
