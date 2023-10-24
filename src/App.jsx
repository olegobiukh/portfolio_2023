import React, { useState } from "react";
import "./main.scss";
import Item from "./components/Slider/Item";
import { data } from "./data";

export const App: React.FC = () => {
  const [theme, setTheme] = useState(data[0].gif);

  return (
    <div className="app">
      <div
        className="background"
        style={{ backgroundImage: `url(${theme})` }}
      />
      <div className="container">
        {data.map((item) => (
          <Item key={item.id} {...item} setTheme={setTheme} />
        ))}
      </div>
    </div>
  );
};
