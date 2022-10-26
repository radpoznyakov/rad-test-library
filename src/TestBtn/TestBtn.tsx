import React from 'react';

import { TestBtnProps } from "./TestBtn.types";

const TestBtn: React.FC<TestBtnProps> = ({ size }) => (
    <div><button>Hello ${size}</button></div>
);

export default TestBtn;