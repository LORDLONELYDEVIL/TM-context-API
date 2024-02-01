
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image';
import { Nav,Container,Row,Col } from 'react-bootstrap';
import "bootstrap-icons/font/bootstrap-icons.css";
import { useState } from 'react';
import Navbar from './Componenents/Navbar';
import AddTask from './Componenents/AddTask';
import TaskList from './Componenents/TaskList';


function App() {
return(
  <Container>
  <Navbar/>
  <Row className='justify-content-md-center'>
    <Col lg="6">
     <AddTask/>
     <TaskList/>

    </Col>
  </Row>
 
  </Container>
)


 
}

export default App;
























{/**  const [menu]=useState([1,2,3,4,5,6])
  return (
    <div className="App">
      
        <Nav className='Navbar bg-primary  container-fluid'>
          <div className='container-fluid d-flex justify-content-between fs-7 text-light fw-bold  pt-3 pb-3 '>
            
            <Nav.Item className='ps-5 ' >Home</Nav.Item>
            <Nav.Item className=' '>About</Nav.Item>
            <Nav.Item className='pe-6 '>Pets</Nav.Item>
          
          </div>
          
        </Nav>
        <div className='container'>
          
         </div>
         <Row  >
          {menu.map((item)=>{
            return(
              <Col  >
                <div >
                 <ImageCards />
                 <ImageCards />
                 <ImageCards />
               
                  
                  </div> 
           
              </Col>
            )

          })}
          
        </Row>  
    </div>
  ); */}