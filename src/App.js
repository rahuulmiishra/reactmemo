import React from "react";

// import MemoizedComponent from "./MemoizedComponent";
import DumbComponent from "./DumbComponent";

const AvailablePet = {
  name: "🐮",
  owner: "🤠",
};

function App() {
  const [pet, setPet] = React.useState(AvailablePet);

  const handleClick = () => {
    setPet({ name: AvailablePet.name, owner: AvailablePet.owner, x: { d: 1 } });
  };

  return (
    <div className="App">
      <button onClick={handleClick}>Click me to Re-render</button>
      <DumbComponent pet={pet} />
    </div>
  );
}

export default App;
