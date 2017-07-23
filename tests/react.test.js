import React from 'react';
import renderer from 'react-test-renderer';
import About from '../src/containers/About';

it('renders About container', () => {
    const aboutPage = renderer.create(<About></About>);
    aboutPage.toJSON();
    expect(aboutPage).toMatchSnapshot();
});