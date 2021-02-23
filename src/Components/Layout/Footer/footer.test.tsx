import { render, screen } from '@testing-library/react'
import Footer from './index'
import WrapComponent from '../../../Utils/Test Utils'

it('Should render', () => {
  render(WrapComponent(Footer))
  const element = screen.getAllByText(/Eihwaz/)
  expect(element[0]).toBeInTheDocument()
})
