const classNames = (...classes: (string | object)[]) => classes.map(cls => {
  if (typeof cls === 'string') return cls;
  if (typeof cls === 'object' && cls !== null && cls !== undefined) {
    return Object.entries(cls).filter(([, value]) => Boolean(value)).map(([key]) => key).join(' ')
  }
  return ''
}
).join(' ')

export const cn = classNames;