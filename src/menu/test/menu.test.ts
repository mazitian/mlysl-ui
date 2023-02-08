import { render } from '@testing-library/vue'
import Menu from '../src/menu'

describe('menu test', () => {
  test('menu init render', async () => {
    const { getByRole } = render(Menu)
    getByRole('menu')
  })
})
