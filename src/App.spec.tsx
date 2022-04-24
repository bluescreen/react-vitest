import { describe, expect, it } from 'vitest'
import App from './App'

import { act,render, screen, userEvent, queryByAttribute,waitFor } from './util'
const getById = queryByAttribute.bind(null, 'id');


describe('Simple working test', () => {
    
  it('the title is visible', () => {
    render(<App />)
    expect(screen.getByText(/Hello Vite \+ React!/i)).toBeInTheDocument()
  })

  it('should increment count on click', async() => {
    const {container} = render(<App />)
    await userEvent.click(getById(container,'countButton') as HTMLElement)
    await userEvent.click(getById(container,'countButton') as HTMLElement)
    await userEvent.click(getById(container,'countButton') as HTMLElement)
    expect(await screen.findByText(/count is: 3/i)).toBeInTheDocument()

  })

  it('should fetch posts', async() => {
  
    const {container} = render(<App />)

    userEvent.click(getById(container,'fetchButton') as HTMLElement)
    await waitFor(() => {
        expect(screen.getByRole('posts')).toBeInTheDocument()
    });

  })
})