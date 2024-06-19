const addDays = require('date-fns/addDays')
const result = x => {
  let p = addDays(new Date(2020, 7, 22), x)
  return `${p.getDate()}-${p.getMonth() + 1}-${p.getFullYear()}`
}
module.exports = result


