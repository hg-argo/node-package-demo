import { afterEach, describe, expect, it, vi } from 'vitest'
import { log } from '../src/utils'

describe('log (Node)', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('wraps the message with ANSI escape codes', () => {
    const spy = vi.spyOn(console, 'log').mockImplementation(() => {})
    log('hello', 'red')
    expect(spy).toHaveBeenCalledWith('\x1b[31mhello\x1b[0m')
  })

  it('uses the correct ANSI code for each color', () => {
    const cases: Array<[Parameters<typeof log>[1], string]> = [
      ['black', '\x1b[30m'],
      ['red', '\x1b[31m'],
      ['green', '\x1b[32m'],
      ['yellow', '\x1b[33m'],
      ['blue', '\x1b[34m'],
      ['magenta', '\x1b[35m'],
      ['cyan', '\x1b[36m'],
      ['white', '\x1b[37m'],
    ]

    for (const [color, ansi] of cases) {
      const spy = vi.spyOn(console, 'log').mockImplementation(() => {})
      log('hello', color)
      expect(spy).toHaveBeenCalledWith(`${ansi}hello\x1b[0m`)
      vi.restoreAllMocks()
    }
  })
})
