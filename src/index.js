import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Container, Row, Col } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <React.StrictMode>
   <Container>
     <Row xs={1}>
       <Col>
        <App />
       </Col>
     </Row>
   </Container>
 </React.StrictMode>
);