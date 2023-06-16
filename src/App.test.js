import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

test('renders the App component', () => {
  render(<App />)

  // Assert that the Header and WeatherResults components are rendered
  expect(
    screen.getByRole('heading', { name: 'Weather Wise' })
  ).toBeInTheDocument()
  expect(screen.getByRole('textbox', { name: '' })).toBeInTheDocument()
})
