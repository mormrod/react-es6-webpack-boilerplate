import React from 'react';
import { Toolbar as ToolBar } from 'react-onsenui';

const Toolbar = (props) => (
  <ToolBar>
    <div className="center">{props.title}</div>
  </ToolBar>
);

export default Toolbar;
