

import React, { useState } from "react";
import { Segment, Grid, Button } from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css';

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count === 0) return;
    setCount(count - 1);
  };

  return (
    <Segment  textAlign="center" compact style={{ marginLeft: "35em"}} >
      <Segment textAlign="center">
     <b> Count:</b>
      <br />
      <br/>
      <b>{count}</b>
      <br />
      <br />

      <Grid textAlign="center">
        <Grid.Row row={1}>
          <Grid.Column>
            <Button
              color="green"
              onClick={handleIncrement}
              content="Increment"
            />
            <Button 
            
            color="red"
            disabled={count === 0}
            onClick={handleDecrement}
            content="Decrement"
          />
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <br />
      <br/>
      
      </Segment>
     
        Done by: Rudra Pratap Singh
        <br />
        Registration Number: 12016945
       
    
    </Segment>
    
    
  );
};

export default Counter;
