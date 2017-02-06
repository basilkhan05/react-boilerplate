export const partial = (fn, ...args) => fn.bind(null, ...args)

const _pipe = (f, g) => (...args) => g(f(...args))

export const pipe = (...fns) => fns.reduce(_pipe)
// null to not chnage its context
// 1st args ... multiple args and comma separated
// 2nd args ... spread the the args 