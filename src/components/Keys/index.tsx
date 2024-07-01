import { useState } from "react";

export const Keys = () => {
  const [fruits, setFruits] = useState<string[]>(["apple", "orange"]);

  const inputs = fruits.map((value, index) => {
    return (
      <div key={value}>
        <span>{value}</span>
        <input type="text" />
      </div>
    );
  });

  const handleClick = () => {
    setFruits(["banana", ...fruits]);
  };

  return (
    <div>
      {inputs}
      <button onClick={handleClick}>Add banan</button>
    </div>
  );
};
