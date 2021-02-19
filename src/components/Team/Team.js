import React from 'react'
import {
  Container,
  Row,
  ColumnText,
  ColumnImages,
  Avatar,
  Subheading,
  Copy
} from './Team.styled'
import Ariel from '../../assets/Ariel.jpg'
import Federico from '../../assets/Federico.jpg'

const Team = () => {
  return (
    <Container>
      <Subheading>The Team</Subheading>
      <Row>
        <ColumnImages>
          <Avatar src={Ariel} alt='Ariel' />
          <h4>Ariel, Co-Founder</h4>
        </ColumnImages>
        <ColumnText>
          <Copy>
            We are Ariel and Federico, business partners from the coastal city
            of Mar del Plata, Argentina. After earning degrees in Economics and
            Industrial Engineering and cutting our teeth with small and mid-size
            businesses (SMBs), we moved to Buenos Aires to work with
            multinational companies.
          </Copy>
          <Copy>
            We are passionate about building more efficient and inclusive
            business intelligence together. We are committed to developing
            direct relationships with (SMBs) who are interested in applying to
            their operations the data analytics of larger corporations. In
            particular, SMBs understand the value of data analytics, but often
            lack the resources needed to develop executable plans from that
            data.
          </Copy>
          <Copy>
            To this end, we founded BiMetriks. BiMetriks is dedicated to helping
            SMBs gather, distill and present actionable data without spending a
            fortune on a business intelligence team.
          </Copy>
          <Copy>
            Our promise is to help clients make better data-driven decisions.
          </Copy>
        </ColumnText>
        <ColumnImages>
          <Avatar src={Federico} alt='Federico' />
          <h4>Federico, Co-Founder</h4>
        </ColumnImages>
      </Row>
    </Container>
  )
}

export default Team
