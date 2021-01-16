import React from "react";
import Button from "./common/Button";

const Hero = () => {
  return (
    <div>
      <h1>From data to business insights</h1>
      <p>
        Translate your raw-data into Interactive Reports for strategic
        decision-making
      </p>
      <div>
        <Button content={"Contact"} />
        <Button content={"Learn More"} />
      </div>
    </div>
  );
};

export default Hero;
