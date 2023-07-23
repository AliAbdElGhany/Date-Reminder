import React from 'react'
import { Row, Col } from 'react-bootstrap'

const Actions = ({Delete,View}) => {
  return (
    <Row className="justify-content-center my-2 pt-3 ">
        <Col sm="8" className="d-flex justify-content-between">
            <button onClick={View} className="btn-style p-2"> View All</button>
            <button onClick={Delete} className="btn-style p-2"> Delete All</button>
        </Col>
    </Row>
  )
}

export default Actions