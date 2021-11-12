import React from 'react';
import { Jumbotron, Container, Button } from 'reactstrap';

const AppJumbotron = () => {
  return (
    <div>
      <Jumbotron fluid>
        <Container>
          <h1 className="display-10">Why Software Engineering?</h1>
          <p>Repetitive processes reduce ROI. Engineers find unique solutions to real life, world changing problems and help plug wastage. </p>
          <hr className="my-2" />
          <p className="lead">
            Find out how I am changing my world now, and how I can help change yours.
          </p>
          <p className="lead">
            <Button color="primary">Start Here</Button>
          </p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default AppJumbotron;