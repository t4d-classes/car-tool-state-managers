import React, { memo } from 'react';

export const ToolHeader = memo((props) => {

  console.log('rendering tool header');

  return (
    <header>
      <h1>{props.headerText}</h1>
    </header>
  );

});