const fs = require('fs')

const fileName = './db/data.json'

const saveDB = data => {
  const dataStr = JSON.stringify(data)
  fs.writeFileSync(fileName, dataStr)
}

const readDB = () => {
  if (!fs.existsSync(fileName)) return null
  const str = fs.readFileSync(fileName, { encoding: 'utf-8' })
  const info = JSON.parse(str)
  return info
}

module.exports = {saveDB, readDB}
