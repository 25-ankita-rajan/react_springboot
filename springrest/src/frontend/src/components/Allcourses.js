import { React, useState, useEffect } from "react";
import Course from './Course';
import base_url from './../api/bootapi';
import axios from 'axios';
import { toast } from "react-toastify";

const Allcourses=()=>{

    useEffect( () => {
        document.title = "All Employees";
    }, []);

    // function to call server:
    const getAllCoursesFromServer=()=>{
        axios.get(`/employees`).then(
            (response)=>{
                // success
               // console.log(response);
                console.log(response.data);
                toast.success("data loaded successfully");
                setCourses(response.data);
            },
            (error)=>{
                // for error
                console.log(error);
                toast.error("something went wrong");

            }
        )
    };

    // calling loading course function
    useEffect( () => {
        getAllCoursesFromServer();
    }, []);

    const [courses, setCourses]=useState([
        // {title:"Java Course", description:"this is demo course"},
        // {title:"Django Course",description:"this is demo course"},
        // {title:"Reactjs Course",description:"this is demo course"},
        // {title:"Angularjs Course",description:"this is demo course"},

    ]);

    const updateCourses=(id)=>{
        setCourses(courses.filter((c) => c.id != id));
    };

    return(
        <div>s
            <h1>All Course</h1>
            <p>List of courses are as follows</p>

            {courses.length>0 
               ? courses.map((item)=> <Course key={item.id} course={item} update={updateCourses} /> )
               : "No courses"
            }
        </div>
    );
};

export default Allcourses;