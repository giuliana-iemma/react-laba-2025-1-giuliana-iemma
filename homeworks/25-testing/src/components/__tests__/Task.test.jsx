import React from 'react';
import Task from '../Task';
import "@testing-library/jest-dom";
import {render, screen, fireEvent, cleanup, getByTestId} from '@testing-library/react';

const defaultProps = {
    title: "Test Task",
    editFunction: jest.fn(),
    deleteFunction: jest.fn(),
    toggleCompleteFunction: jest.fn(),
    isEditing: false,
    saveChanges: jest.fn(),
    errorMessage: '',
    isCompleted: false,
}

afterEach(cleanup)


describe('Task rendering and props', ()=> {
    test('renders correctly', () => {
        render(<Task title="Test Task" isCompleted={false} />);
        
        const taskElement = screen.getByText("Test Task");
        
        expect(taskElement).toBeInTheDocument();
    });

    test('renders with not completed state by default', () => {
        render(<Task {...defaultProps} />);

        const iconButton = screen.queryByTestId("task-check-button");
        const icon = iconButton.querySelector('img')

        expect(icon).toHaveAttribute('src', './src/assets/icons/check-unchecked.png');
    });

})