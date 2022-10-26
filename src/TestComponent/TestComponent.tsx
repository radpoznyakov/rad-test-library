import React from 'react';

import { TestComponentProps } from "./TestComponent.types";

const TestComponent: React.FC<TestComponentProps> = ({ theme }) => (
    <div><h3 className="heading">I'm the test component ${theme}</h3></div>
  );
  
  export default TestComponent;