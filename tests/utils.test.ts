import { afterEach, describe, expect, it, vi } from 'vitest'
import { log } from '../src/utils'

describe('log', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('calls console.log with the given message', () => {
    const spy = vi.spyOn(console, 'log').mockImplementation(() => {})
    log('hello')
    expect(spy).toHaveBeenCalledWith('hello')
  })

  it('calls console.log exactly once', () => {
    const spy = vi.spyOn(console, 'log').mockImplementation(() => {})
    log('hello')
    expect(spy).toHaveBeenCalledTimes(1)
  })
})
