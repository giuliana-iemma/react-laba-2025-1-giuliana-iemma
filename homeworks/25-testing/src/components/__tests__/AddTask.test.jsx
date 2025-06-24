import React from 'react';
import AddTask from '../AddTask';
import '@testing-library/jest-dom';
import { render, screen, fireEvent, cleanup, getByTestId } from '@testing-library/react';

afterEach(cleanup);

const defaultProps = {
  onAdd: jest.fn(), 
  value: 'Go to the groceries',
  errorMessage: '',
  onChange: jest.fn(),
};

describe('AddTask rendering and props', () => {
  test('input renders correctly', () => {
    render(<AddTask {...defaultProps} />);

    expect(screen.getByTestId('task-input'));
  });

  test('button renders correctly', () => {
    render(<AddTask {...defaultProps} />);

    expect(screen.getByTestId('addTask-button'));
  });
});

describe('AddTask behaviour', () => {
  test('button calls correct function on click', () => {
    render(<AddTask {...defaultProps} />);

    fireEvent.click(screen.getByText('Add'));

    expect(defaultProps.onAdd).toHaveBeenCalled();
  });

  test('input receives prop value and reflects it', () => {
    render(<AddTask {...defaultProps} />);

    const input = screen.getByTestId('task-input');

    fireEvent.change(input);

    expect(input).toHaveValue(defaultProps.value);
  });

  test('show error message only if there is an error', () => {
    //The errorMessage should only be rendered if the prop has a value other than empty
    render(<AddTask {...defaultProps} errorMessage="Please enter a task" />);

    expect(screen.getByText('Please enter a task')).toBeInTheDocument();
  });

  test('does not render an error message if errorMessage is empty', () => {
    render(<AddTask {...defaultProps} errorMessage="" />);

    expect(screen.queryByTestId('error-msg')).not.toBeInTheDocument(); //queryByTestId returns null if the element is not there. getByTestId throws an error if the element is not found.
  });
});
