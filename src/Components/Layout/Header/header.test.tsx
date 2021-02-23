import { render, screen } from '@testing-library/react'
import Header from './index'
import wrapComponent from '../../../Utils/Test Utils'

it('Should render header', async () => {
  render(wrapComponent(Header))
  const element = screen.getByText('Movies')
  expect(element).toBeInTheDocument()
})
