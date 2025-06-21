import React from 'react';
import IconButton from '../IconButton';
import "@testing-library/jest-dom";
import {render, screen, fireEvent, cleanup, getByTestId} from '@testing-library/react';

const defaultProps = {
    icon: "test.svg",
    label: "Test Button",
    onClick: jest.fn()
}

afterEach(cleanup)

describe("IconButton rendering and props", ()=> {
    test("the button renders correctly", () => {
        render (<IconButton {...defaultProps}/>);

        expect(screen.getByTestId('icon-btn')).toBeInTheDocument()
    })

    test("the image has the proper src and alt attributes", () => {
        render (<IconButton {...defaultProps}/>);
        
        const img = screen.getByTestId('icon-img');

        expect(img).toBeInTheDocument(); //Renders
        expect(img).toHaveAttribute('src', `./src/assets/icons/${defaultProps.icon}`);
        expect(img).toHaveAttribute('alt', defaultProps.label);
    })
})

describe("IconButton behaviour", ()=> {
    test("the button triggers a click function correctly", ()=> {
    render (<IconButton {...defaultProps} />);

     fireEvent.click(screen.getByTestId('icon-btn'));

    expect(defaultProps.onClick).toHaveBeenCalled();
    })
})

