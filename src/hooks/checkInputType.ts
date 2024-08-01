import { parse, isValid } from 'date-fns'

function isValidDate(dateString: string) {
  const parsedDate = parse(dateString, 'yyyy-MM-dd', new Date())
  return isValid(parsedDate)
}

function isNumber(value: string) {
  return !isNaN(Number(value))
}

export function detectType(value: string) {
  switch (true) {
    case value.trim() === '':
      return 'text'
    case isValidDate(value):
      return 'date'
    case isNumber(value):
      return 'number'
    default:
      return 'text'
  }
}
