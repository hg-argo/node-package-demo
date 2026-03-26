const ANSI_COLORS = {
  black: '\x1b[30m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
  white: '\x1b[37m',
}

/**
 * @category Utilities
 */
export type LogColor = keyof typeof ANSI_COLORS

const ANSI_RESET = '\x1b[0m'

/**
 * Logs a colored message to the console.
 * Uses CSS styling in the browser and ANSI escape codes in Node.js.
 * @param message The message to log.
 * @param color The color to apply.
 * @category Utilities
 */
export function log(message: string, color: LogColor): void {
  // If window is defined, then we are in a browser environment, so we use the CSS colors to colorize log output
  if (typeof window !== 'undefined') {
    console.log(`%c${message}`, `color: ${color}`)
  }
  // Else, then we are in a Node environment, and we use ANSI characters to colorize log output
  else {
    console.log(`${ANSI_COLORS[color]}${message}${ANSI_RESET}`)
  }
}
