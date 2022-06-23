import { Low, TextFile } from 'lowdb'
import YAML from 'yaml'

export class YAMLFile {
  constructor(filename: string) {
    // @ts-ignore: this.adapter exists
    this.adapter = new TextFile(filename)
  }

  async read() {
    // @ts-ignore: this.adapter exists
    const data = await this.adapter.read()
    if (data === null) {
      return []
    } else {
      const res = YAML.parse(data)
      return res
    }
  }

  write(obj: any) {
    // @ts-ignore: this.adapter exists
    return this.adapter.write(YAML.stringify(obj))
  }
}

export default async (path: string) => {
  const adapter = new YAMLFile(path)
  const db = new Low(adapter)
  await db.read()
  db.data ||=  [] 

  return db
}
