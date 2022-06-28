import yargs, {Arguments} from 'yargs'
import { hideBin } from 'yargs/helpers'
import getDb from '@/db'
import { cwd } from 'process'
import { resolve } from 'path'

const yarg = yargs(hideBin(process.argv))

interface MyArgs extends Arguments {
  path: string;
}

yarg.command({
    command: 'dump',
    describe: 'Have Jenkins add a new note',
    builder: {
      path: {
        describe: 'File path',
        demandOption: true,
      },
      body: {
        describe: 'Note content',
        demandOption: false,
      }
    },
    async handler(argv: MyArgs) {
      const db = await getDb(resolve(cwd(), argv.path))
      // @ts-ignore
      console.log(db.data)
    }
})


yarg.parse(process.argv.slice(2))
