import React from 'react'
import  './reserve.css'
import {Form, Button} from 'react-bootstrap'


const Reservation = () => {
  return (
    <div className='form'>
        <h1>Contact</h1>
        <p>We offer full-service catering for any event, large or small. We understand your needs and we will cater the food to satisfy the biggerst criteria of them all, both look and taste. Do not hesitate to contact us.</p>
         <p>Catering Service, 42nd Living St, 43043 New York, NY</p>
         <p>You can also contact us by phone 00553123-2323 or email catering@catering.com, or you can send us a message here:</p>
         <Form.Control size="lg" type="text" placeholder="Name" />
         <Form.Control size="md" type="number" placeholder="How many people?"/>
         <Form.Control size="md" type="date" placeholder=""/>

         <Button variant="outline-secondary">Send Message</Button>{' '}
        



      
    </div>
  )
}

export default Reservation
