import React from 'react';
import { render, screen } from '@testing-library/react';
import WelcomePopup from './WelcomePopup';

describe('WelcomePopup', () => {
  test('renders WelcomePopup component', () => {
    render(<WelcomePopup />);
    const welcomeElement = screen.getByTestId('modal');
    expect(welcomeElement).toBeInTheDocument();
  });

  test('renders the close button', () => {
    render(<WelcomePopup />);
    const closeButton = screen.getByRole('button', { className: 'close' });
    expect(closeButton).toBeInTheDocument();
  });

  // Add more tests as needed
});