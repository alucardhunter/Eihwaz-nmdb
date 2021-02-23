import { render } from '@testing-library/react'
import Movie from './index'
import WrapComponent from '../../Utils/Test Utils'
import AppDispatch from '../../Store/store'

it('Should render Movie', () => {
  const dispatch = jest.spyOn(AppDispatch, 'dispatch')
  render(WrapComponent(Movie))
  expect(dispatch).toBeCalled()
})
