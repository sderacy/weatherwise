import React from 'react'
import { render, waitFor, fireEvent } from '@testing-library/react'
import WeatherResults from '../Components/WeatherResults/WeatherResults.js'

describe('WeatherResults', () => {
  // Mock the fetch function and its response
  global.fetch = jest.fn(() =>
    Promise.resolve({
      ok: true,
      json: () =>
        Promise.resolve({
          current: {
            temp_f: 70,
            condition: { text: 'Sunny' },
            humidity: 50,
          },
        }),
    })
  )

  it('renders the WeatherResults component correctly', async () => {
    // Define mock props
    const mockProps = {
      searchData: 'New York',
    }

    // Render the WeatherResults component with the mock props
    const { getByText, getByLabelText } = render(
      <WeatherResults {...mockProps} />
    )

    // Assert that loading state is initially rendered
    expect(getByText('Loading...')).toBeInTheDocument()

    // Wait for the weather data to be fetched and rendered
    await waitFor(() => expect(getByText('70°F')).toBeInTheDocument())

    // Assert that the fetched weather data is rendered correctly
    expect(getByText('Sunny')).toBeInTheDocument()
    expect(getByText('50%')).toBeInTheDocument()

    // Simulate clicking on the temperature toggle button
    fireEvent.click(getByLabelText('toggle F/C'))

    // Assert that the temperature and unit are updated after the toggle
    expect(getByText('21°C')).toBeInTheDocument()
  })

  it('renders the WeatherResults component with default searchData', async () => {
    // Render the WeatherResults component without providing searchData
    const { getByText } = render(<WeatherResults />)

    // Wait for the default weather data to be fetched and rendered
    await waitFor(() => expect(getByText('65°F')).toBeInTheDocument())

    // Assert that the default weather data is rendered correctly
    expect(getByText('Cloudy')).toBeInTheDocument()
    expect(getByText('17%')).toBeInTheDocument()
  })
})
