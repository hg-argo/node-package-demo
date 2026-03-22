import { describe, expect, it } from 'vitest'
import { randomInt } from '../src/index'

describe('randomInt', () => {
  it('returns a number within the given range', () => {
    for (let i = 0; i < 100; i++) {
      const result = randomInt(1, 10)
      expect(result).toBeGreaterThanOrEqual(1)
      expect(result).toBeLessThanOrEqual(10)
    }
  })

  it('returns min when min equals max', () => {
    expect(randomInt(5, 5)).toBe(5)
  })
})
