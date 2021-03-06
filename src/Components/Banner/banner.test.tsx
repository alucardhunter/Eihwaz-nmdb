import { render, screen } from '@testing-library/react'
import Banner from './index'
import WrapComponent from '../../Utils/Test Utils'

it('Should render banner', () => {
  render(WrapComponent(Banner))
  const element = screen.getByText(/Welcome/)
  expect(element).toBeInTheDocument()
})
