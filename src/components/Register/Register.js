import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import Grid from '@material-ui/core/Grid';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers'
const Register = () => {
    const { worktitle } = useParams();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [selectedDate, setSelectedDate] = useState({
        checkIn: new Date()
    });

    const handleCheckInDate = (date) => {
        const newDates = {...selectedDate}
        newDates.checkIn = date;
        setSelectedDate(newDates);
    };
    const handleRegister = () =>{
        const description=document.getElementById('description').value;
        const newBooking = {...loggedInUser, ...selectedDate,worktitle,description};
        
        fetch('http://localhost:5000/addBooking', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newBooking)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            
        })
        
    }
    return (
        <Container>
            <Form>
                <Form.Group controlId="formBasicEmail" style={{ border: '1px solid gray', borderRadius: '5px', padding: '50px' }}>
                    <h1 style={{textAlign: 'center'}}>Register</h1>
                    <Form.Control type="name" placeholder="Name" value={loggedInUser.name} />
                    <br/>
                    <Form.Control type="email" placeholder="Enter email" value={loggedInUser.email} />
                    <br/>
                    <Form.Control type="text" placeholder="Description" id="description"/>
                    <br/>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid container justify="space-around">
                    <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        format="dd/MM/yyyy"
                        margin="normal"
                        id="date-picker-inline"
                        label="Check In Date"
                        value={selectedDate.checkIn}
                        onChange={handleCheckInDate}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                </Grid>
               
            
                    <br/>
                    <Form.Control type="text" placeholder="task " value={worktitle} />
                    <br/>
                    <Button variant="secondary" onClick={handleRegister} >
                    <Link to='/dashboard' style={{ textDecoration: 'none'}}>Submit</Link>
                    
                        
                    </Button>
                    </MuiPickersUtilsProvider>
                </Form.Group>
            </Form>
            
        </Container>
    );
};

export default Register;