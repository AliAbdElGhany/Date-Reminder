import React from 'react'
import { Row, Col } from 'react-bootstrap'

const AppointmentsCount = ({Appointments}) => {
  return (
    <Row className="justify-content-center p-3">
          <Col className="h3">
            You have {Appointments.length} Appointments 
          </Col>
        </Row>
  )
}

export default AppointmentsCount