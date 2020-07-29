import React, { useState, useEffect } from "react";

import { getValues } from "./helper";

const CheckboxWithLabel = () => {
  const [useInfo, setUserInfo] = useState([]);
  useEffect(() => {
    async function initValue() {
      const values = await getValues();
      setUserInfo(values);
    }
    initValue();
  }, []);
  return (
    <ul>
      {useInfo.map((item, index) => {
        return <li key={index}>{item.name}</li>;
      })}
    </ul>
  );
};

export default CheckboxWithLabel;
