import { render, screen } from '@testing-library/react'
import Welcome from './index'
import WrapComponent from '../../Utils/Test Utils'

it('Should render Search', () => {
  render(WrapComponent(Welcome))
  const element = screen.getByText(/Your favorite movies/)
  expect(element).toBeInTheDocument()
})
