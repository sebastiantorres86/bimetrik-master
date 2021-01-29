import React from "react";
import { Mission, CTA } from "../../components";

const About = () => {
  return (
    <>
      <Mission />
      <CTA content={"Let's Connect! →"} link={"/contact"}/>
    </>
  );
};

export default About;
