import React from 'react'
import { render } from '@testing-library/react'
import WeatherCard from './WeatherCard'

describe('WeatherCard', () => {
  it('renders the WeatherCard component correctly', () => {
    // Define mock props
    const mockProps = {
      temp: 25,
      skyText: 'Sunny',
      humidity: 80,
      unit: 'C',
      toggle: true,
      convert: jest.fn(),
      searchData: 'New York',
      today: 'June 16, 2023',
    }

    // Render the WeatherCard component with the mock props
    const { getByText, getByLabelText } = render(<WeatherCard {...mockProps} />)

    // Assert that the relevant elements and text are rendered correctly
    expect(getByText('New York')).toBeInTheDocument()
    expect(getByText('June 16, 2023')).toBeInTheDocument()
    expect(getByText('25°C')).toBeInTheDocument()
    expect(getByText('Sunny')).toBeInTheDocument()
    expect(getByText('80%')).toBeInTheDocument()
    expect(getByLabelText('toggle F/C')).toBeInTheDocument()
  })
})
