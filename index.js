import fs from 'fs'
import filterExtension from './libs/filterExtension'

const readDir = async (path) => {
  await fs.readdir(path, (err, file) => {
    console.log(filterExtension(file))
  })
}

export default readDir