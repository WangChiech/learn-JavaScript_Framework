let num = [1, 2]

const b = 1

export const c = 2

export const sum = async() => {
  debugger
  const { fn } = await import('./subIndex.js')
  fn()
  return num[0] + num[1]
}