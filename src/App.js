import { Button, Col, Row, Container } from "react-bootstrap";
import { Appointments } from "./data";
import AppointmentsCount from './components/AppointmentsCount';
import AppointmentsList from './components/AppoimtmentsList';
import Actions from './components/Actions';
import React, { useState } from "react";
import img1 from './Images/1.jpg'

function App() {
  
  const [AppointmentsData, setAppointmentsData] = useState(Appointments)
  const onDelete = () => {
    setAppointmentsData([])
  }
  const onView = () => {
    setAppointmentsData(Appointments)
  }
  
  return (
    <div className="font color-body">
      <Container className="p-5">
       
        <AppointmentsCount Appointments={AppointmentsData} />

        <AppointmentsList Appointments={AppointmentsData} />        

        <Actions Delete={onDelete} View={onView}/>

      </Container>
    </div>
  );
}

export default App;
