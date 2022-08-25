import React, { useState } from "react";
import {Button} from 'react-native';

const ButtonGroup = props => {
  console.log(props.buttons)
  return (
    <>
      {props.buttons.map(button => (
        <Button title={button}
              onPress={() => {
                props.onPress(button)
            }
          } />
      ))}
    </>
  );
};

export default ButtonGroup;
