import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import About from '../src/containers/About';
import {App} from '../src/App';

it('reanders App', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App/>, div);
});

it('snapshot App', () => {
    const app = renderer.create(<App/>);
    app.toJSON();
    expect(app).toMatchSnapshot();
})

it('snapshot About container', () => {
    const aboutPage = renderer.create(<About></About>);
    aboutPage.toJSON();
    expect(aboutPage).toMatchSnapshot();
});