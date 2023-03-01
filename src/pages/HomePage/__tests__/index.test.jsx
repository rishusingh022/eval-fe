import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import HomePage from '..';

const mockedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  useNavigate: () => mockedNavigate,
}));

describe('HomePage', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('should do this when this happen', () => {});
});
