import React from 'react';
import Header from './Header';
import { shallow } from 'enzyme';

test('render without crashing', () => {
    shallow(<Header />);
});

test('includes heading', () => {
   const header = shallow(<Header />);
   expect(header.containsMatchingElement(<h1 className="text-center pb-1">React Number Guessing Game</h1>)).toEqual(true);
});

test('includes paragraph', () => {
    const header = shallow(<Header />);
    expect(header.containsMatchingElement(
        <p className="p-2">Random number selected between 1 and 100. See if you can guess it in 10 turns or fewer. You get info if your guess was too high or too low.</p>
    )).toEqual(true);
});