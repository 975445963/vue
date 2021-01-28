export default val => {
  if (val) {
    return String(val).replace(
      /^(\S{3})\S*(\S{4})$/,
      `$1${'*'.repeat(val.length - 7)}$2`
    )
  }

  return ''
}
