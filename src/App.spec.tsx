import { describe, expect, it } from 'vitest'
import App from './App'
import { render, screen, userEvent } from './util'

describe('Simple working test', () => {
    
  it('the title is visible', () => {
    render(<App />)
    expect(screen.getByText(/Hello Vite \+ React!/i)).toBeInTheDocument()
  })

  it('should increment count on click', async() => {
    render(<App />)
    await userEvent.click(screen.getByRole('button'))
    await userEvent.click(screen.getByRole('button'))
    await userEvent.click(screen.getByRole('button'))
    expect(await screen.findByText(/count is: 3/i)).toBeInTheDocument()

  })
})