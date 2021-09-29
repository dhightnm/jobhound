import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import {cleanup, fireEvent, render} from '@testing-library/react';
import App from '../client/src/app';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });


test('Simple test for CircleCI', () => {
  expect(2 + 2).toEqual(4);
});

it('Tests if App is properly rendering', () => {
  shallow(<App/>);
});