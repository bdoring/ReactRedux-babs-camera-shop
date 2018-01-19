import React from 'react';
import { Button } from 'reactstrap';

const Miss = () => {
  return (
    <div>
      <h1 style={{ fontSize: "100px"}}>Oops!</h1>
      <h1>Where are we?</h1>
      <p style={{ fontSize: "25px", margin: "30px"}}>The page you are looking for does not exist :-(</p>
      <Button color="primary" size="lg" href="/">Go back to Home Page</Button>
    </div>
  )
}

export default Miss;
