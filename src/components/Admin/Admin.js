import { Container } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import './Admin.css'
const Admin = () => {
    const [allbookings, setAllBookings] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/allBookings')
            .then(res => res.json())
            .then(data => setAllBookings(data));
    }, [])

    const deleteProduct=(id) =>{
        fetch(`http://localhost:5000/delete/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    console.log(result);
                }
            })
    }
    return (
        <div className="App h-control">
            <h3>Total : {allbookings.length} items </h3>
            
                    <Container>
                    {
                        allbookings.map(book => <Container style={{ backgroundColor: 'lightgray', margin: '10px', borderRadius: '5px',  padding: '20px' , paddingLeft: '60px'}} >
                            <h5>{book.name}</h5>      
                            <h5>{book.email}</h5>
                            <h5>{new Date(book.checkIn).toDateString('dd/MM/yyyy')}</h5> 
                            <h5>{book.worktitle}</h5>
            
                            <Button onClick={() =>deleteProduct(`${book._id}`)}>Remove</Button>
                        </Container>)
                    }
                    </Container>
        </div>
    );
};

export default Admin;