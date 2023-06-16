import React from 'react'
import { render, waitFor, fireEvent } from '@testing-library/react'
import WeatherResults from '../Components/WeatherResults/WeatherResults.js'

describe('WeatherResults', () => {
  it('renders the WeatherResults component correctly', async () => {
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

    // Define mock props
    const mockProps = {
      searchData: 'New York',
    }

    // Render the WeatherResults component with the mock props
    const { getByText, getByLabelText } = render(
      <WeatherResults {...mockProps} />
    )

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
    const { getByText } = render(<WeatherResults searchData={''} />)

    // Wait for the default weather data to be fetched and rendered
    await waitFor(() => expect(getByText('65°F')).toBeInTheDocument())

    // Assert that the default weather data is rendered correctly
    expect(getByText('Cloudy')).toBeInTheDocument()
    expect(getByText('17%')).toBeInTheDocument()
  })
})
