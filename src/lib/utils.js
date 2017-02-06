export const partial = (fn, ...args) => fn.bind(null, ...args)

// null to not chnage its context
// 1st args ... multiple args and comma separated
// 2nd args ... spread the the args 