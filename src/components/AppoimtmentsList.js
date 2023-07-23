import React from 'react'
import { Row, Col } from 'react-bootstrap'

const AppoimtmentsList = ({Appointments}) => {
  return (
    <Row className="justify-content-center">
          <Col  className="">
            <div className="table-container p-5">
              {Appointments.length ? (Appointments.map((item) => {
                return(
                  <div key={item.id} className="d-flex border-bottom my-3">
                    <img className="img-avatar" src={item.img} alt="Not Found"/>

                    <div className="my-3 px-4">
                    <p className="d-inline fs-1">{item.name}</p>
                    <p className=" fs-6 px-10">{item.date}</p>
                    </div>
                  </div>
                )
              })) : <h2  className="text-center">No Appointments Resrved</h2> }
                
            </div>
          </Col>
        </Row>
  )
}

export default AppoimtmentsList