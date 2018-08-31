const filterExtension = all => (all ? all.filter((e) => {
  const regex = /^.+\.[A-Za-z0-9]*/g
  return !!e.match(regex)
}) : null)

export default filterExtension
