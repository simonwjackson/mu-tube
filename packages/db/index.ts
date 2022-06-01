import { Low, TextFile } from 'lowdb'
import YAML from 'yaml'

class YAMLFile {
  constructor(filename: string) {
    this.adapter = new TextFile(filename)
  }

  async read() {
    const data = await this.adapter.read()
    if (data === null) {
      return []
    } else {
      const res = YAML.parse(data)
      return res
    }
  }

  write(obj) {
    return this.adapter.write(YAML.stringify(obj))
  }
}

const adapter = new YAMLFile('file.yaml')
const db = new Low(adapter)

await db.read()

db.data ||=  [] 

// db.data.push([{ title }])
 
// db.write()

export default db
