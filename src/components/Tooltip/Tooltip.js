import React from "react";
import ReactTooltip from "react-tooltip";
import {
  Container,
  TooltipAnchor1,
  TooltipAnchor2,
  TooltipAnchor3,
  TooltipAnchor4,
  TooltipAnchor5,
  TooltipAnchor6,
} from "./Tooltip.styled";

const Tooltip = () => {
  return (
    <Container>
      <TooltipAnchor1>
        <p data-tip="Dynamic filter by areas">👉</p>
        <ReactTooltip place="left" type="info" effect="float" />
      </TooltipAnchor1>

      <TooltipAnchor2>
        <p data-tip="Access to most important metrics quickly and easily">👈</p>
        <ReactTooltip place="left" type="info" effect="float" />
      </TooltipAnchor2>

      <TooltipAnchor3>
        <p data-tip="Geolocalize your information">👉</p>
        <ReactTooltip place="left" type="info" effect="float" />
      </TooltipAnchor3>

      <TooltipAnchor4>
        <p data-tip="Semaforize your information to detects which item looks good and which one needs improvement">
          👈
        </p>
        <ReactTooltip place="left" type="info" effect="float" />
      </TooltipAnchor4>

      <TooltipAnchor5>
        <p data-tip="The best chart for each porpouse">👉</p>
        <ReactTooltip place="left" type="info" effect="float" />
      </TooltipAnchor5>

      <TooltipAnchor6>
        <p data-tip="Logo from your company">👉</p>
        <ReactTooltip place="left" type="info" effect="float" />
      </TooltipAnchor6>
    </Container>
  );
};

export default Tooltip;
