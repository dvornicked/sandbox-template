import { render, screen } from '@testing-library/react'
import { App } from '..'

it('renders title', () => {
  render(<App />)
  const titleElement = screen.getByText(/template/i)
  expect(titleElement).toBeInTheDocument()
})
