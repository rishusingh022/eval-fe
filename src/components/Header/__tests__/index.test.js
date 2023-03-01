import { render, screen } from '@testing-library/react';
import React from 'react';
import Header from '..';

describe('Header', () => {
  it('should show the header text when the component is rendered', () => {
    render(<Header />);
  });
});
