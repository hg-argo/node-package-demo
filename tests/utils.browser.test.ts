// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import { log } from '../src/utils'

describe('log (browser)', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('uses %c with a CSS color string', () => {
    const spy = vi.spyOn(console, 'log').mockImplementation(() => {})
    log('hello', 'red')
    expect(spy).toHaveBeenCalledWith('%chello', 'color: red')
  })

  it('passes the color name as-is for CSS', () => {
    const spy = vi.spyOn(console, 'log').mockImplementation(() => {})
    log('hello', 'magenta')
    expect(spy).toHaveBeenCalledWith('%chello', 'color: magenta')
  })
})
