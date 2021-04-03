import axios from "axios";
import { React } from "react";
import { toast } from "react-toastify";
import { 
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    CardFooter,
    Button, 
    Container
 } from "reactstrap";

 const Course=({course, update})=>{

    const deleteEmployee=(id)=>{
        axios.delete(`/employees/${id}`).then(
            (response)=>{
                toast.success("deleted successfully!");
                update(id);
            },
            (error)=>{
                toast.success("Not Deleted | Server error");
            }
        )
    }
    return(
        <Card className="text-center">
            <CardBody>
                <CardSubtitle className="font-weight-bold">{course.id}</CardSubtitle>
                <CardText className="font-weight-bold">{course.code}</CardText>
                <CardText className="font-weight-bold">{course.name}</CardText>
                <CardText className="font-weight-bold">{course.isActive}</CardText>
                <Container className="text-center">
                    <Button 
                        color="danger"
                        onClick={()=>{
                            deleteEmployee(course.id);
                        }}
                    >
                    Delete
                    </Button>
                    <Button color="warning ml-3">Update</Button>
                </Container>
            </CardBody>
        </Card>
    );
 }
 export default Course;