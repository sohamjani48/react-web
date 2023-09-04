import React, { useState } from "react";

const User = (props) => {
  const { name } = props;

  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  return (
    <div className="user-card">
      <div>Count {count}</div>
      <h2>Name: {name}</h2>
      <h3>Location: Gandhinagar</h3>
      <h4>Contact: +91 635-382-6052</h4>
    </div>
  );
};

export default User;
