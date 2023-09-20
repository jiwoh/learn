export function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export const callAll =
  (...fns) =>
  (...args) =>
    fns.forEach((fn) => fn?.(...args))
