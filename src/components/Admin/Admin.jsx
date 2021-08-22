import { useEffect, useState } from 'react';
import axios from 'axios';
import {Button, Paper, Container, Table, TableBody, TableHead, TableCell, TableRow} from '@material-ui/core';

function Admin (){
    // Feedback data on page load
    useEffect(() => {
        fetchFeedback();
    }, []);

    // Local state to store feedback data
    let [feedbackList, setFeedbackList] = useState([]);

    const fetchFeedback = () => {
        // Fetch feedback from server
        axios({
            method: 'GET',
            url: '/feedback',
        }).then((response) => {
            setFeedbackList(response.data);
        }).catch((error) => {
            console.log('error', error);
        })
    } 

    const handleDelete = (feedback) => {
        // Delete request to server
        axios({
            method: 'DELETE',
            url: (`/feedback/${feedback.id}`)
        }).then(function (res) {
            fetchFeedback()
        }).catch((error) => {
            console.log('Delete error')
        })
    }

    return (
        <Container maxWidth="md">
            <h2>Admin</h2>
            <Paper>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Feeling</TableCell>
                            <TableCell align="center">Understanding</TableCell>
                            <TableCell align="center">Support</TableCell>
                            <TableCell align="center">Comments</TableCell>
                            <TableCell align="center">Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                            
                        {feedbackList.map((feedback) => {
                            return (
                                <TableRow key={feedback.id}>
                                    <TableCell align="center">{feedback.feeling}</TableCell>
                                    <TableCell align="center">{feedback.understanding}</TableCell>
                                    <TableCell align="center">{feedback.support}</TableCell>
                                    <TableCell align="center">{feedback.comments}</TableCell>
                                    <TableCell align="center">
                                        <Button
                                            variant="contained"
                                            color="secondary"
                                            onClick={() => {
                                                if (window.confirm('Are you sure you wish to delete this feedback?')) 
                                                handleDelete(feedback)} }
                                        >
                                            Delete
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </Paper>
        </Container>
    )
} // End Admin function

export default Admin;