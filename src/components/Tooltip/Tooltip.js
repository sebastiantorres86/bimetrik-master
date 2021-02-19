import React from 'react'
import ReactTooltip from 'react-tooltip'
import {
  Div,
  Container,
  TooltipAnchor1,
  TooltipAnchor2,
  TooltipAnchor3,
  TooltipAnchor4,
  TooltipAnchor5,
  TooltipAnchor6,
  Heading,
  Copy
} from './Tooltip.styled'

const Tooltip = () => {
  return (
    <Div>
      <Heading>CASE OF USE: HUMAN RESOURCES</Heading>
      <Copy>Stay on the 👉 and find the functions of the report</Copy>
      <Container>
        <TooltipAnchor1>
          <p data-tip='Dynamic filter by areas'>👉</p>
          <ReactTooltip type='info' effect='float' />
        </TooltipAnchor1>

        <TooltipAnchor2>
          <p data-tip='Access to most important metrics quickly and easily'>
            👈
          </p>
          <ReactTooltip type='info' effect='float' />
        </TooltipAnchor2>

        <TooltipAnchor3>
          <p data-tip='Geolocalize your information'>👉</p>
          <ReactTooltip type='info' effect='float' />
        </TooltipAnchor3>

        <TooltipAnchor4>
          <p data-tip='Semaforize your information to detects which item looks good and which one needs improvement'>
            👈
          </p>
          <ReactTooltip type='info' effect='float' />
        </TooltipAnchor4>

        <TooltipAnchor5>
          <p data-tip='The best chart for each porpouse'>👉</p>
          <ReactTooltip type='info' effect='float' />
        </TooltipAnchor5>

        <TooltipAnchor6>
          <p data-tip='Logo from your company'>👉</p>
          <ReactTooltip type='info' effect='float' />
        </TooltipAnchor6>
      </Container>
    </Div>
  )
}

export default Tooltip
