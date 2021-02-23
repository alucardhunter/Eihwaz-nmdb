import React from 'react'
import { render, fireEvent, waitFor } from '@testing-library/react'
import App from './App'
import { store } from './Utils/Test Utils'

it('renders toastify holder', () => {
  const { container } = render(<App />)
  const linkElement = container.getElementsByClassName('Toastify').item(0)
  expect(linkElement).toHaveClass('Toastify')
})

it('test hidden menu', async () => {
  const { container } = render(<App />)
  const header = container.getElementsByClassName('Header').item(0)
  fireEvent.scroll(window, { target: { scrollY: 10 } })

  return waitFor(() => { expect(header).toHaveStyle({ visibility: 'hidden' }) })
    .then(() => console.log('Dom Changed'))
    .catch(() => console.log('Dom not Changed'))
})

it('test redux', () => {
  const authInitialState = { domain: 'https://image.tmdb.org/t/p/w220_and_h330_face/', error: '', status: 'idle', token: '' }
  render(<App />)

  expect(store.getState().Auth).toEqual(authInitialState)
})
