import React, { Fragment , useEffect, useState}  from 'react';
import { Container, Form, FormGroup, Input, Button } from 'reactstrap';
import axios from 'axios';
import { toast } from 'react-toastify';

const AddCourse = () => {
    useEffect( () => {
        document.title = "Add Employees";
    }, []);

    const [course,setCourse]=useState({});

    const handleForm = (e) =>{
        console.log(course);
        postDataToServer(course);
        e.preventDefault();
    };

    // function to post data on server
    const postDataToServer=(data)=>{
        axios.post(`/employees`,data).then(
            (response)=>{
                console.log(response);
                console.log("success");
                toast.success("Employee added successfully");
            },(error)=>{
                console.log(error);
                console.log("error");
                toast.error("Something went wrong!");
            }
        )
    };

    return(
        <Fragment>
            <h1 className="text-center my-3">Fill Employee Details</h1>
           <Form onSubmit={handleForm}>
                <FormGroup>
                    <label for="id">Employee Id</label>
                    <Input 
                        type="text" 
                        placeholder="Enter here" 
                        name="id" 
                        id="id"
                        onChange={(e)=>{
                            setCourse({ ...course, id: e.target.value });
                        }}
                    />
                </FormGroup>

                <FormGroup>
                    <label for="code">Employee Code</label>
                    <Input 
                        type="text" 
                        placeholder="Enter code here" 
                        id="code"
                        onChange={(e)=>{
                            setCourse({...course, code: e.target.value });
                        }}
                    />
                </FormGroup>

                <FormGroup>
                    <label for="name">Employee Name</label>
                    {/* <Input
                         type="textarea" 
                         placeholder="enter description here" 
                         id="description"
                         style={{height: 150 }}
                    /> */}
                    <Input 
                        type="text" 
                        placeholder="Enter name here" 
                        id="name"
                        onChange={(e)=>{
                            setCourse({...course, name: e.target.value });
                        }}
                    />
                </FormGroup>

                <FormGroup>
                    <label for="isActive">Is Active</label>
                    <Input 
                        type="text" 
                        placeholder="Enter here" 
                        id="isActive"
                        onChange={(e)=>{
                            setCourse({...course, isActive: e.target.value });
                        }}
                    />
                </FormGroup>

                <Container>
                    <Button color="success"> Add Employee</Button>
                    <Button
                        type="reset" 
                        color="warning ml-2"
                        onClick={() => {
                            setCourse({id: "", code:"", name:"",isActive:""});
                        }}
                    > 
                    Clear
                    </Button>
                </Container>
            </Form> 
        </Fragment>
    );
};

export default AddCourse;