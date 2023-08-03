import { readFileSync } from 'fs'
import { resolve } from 'path'

const schema = readFileSync(resolve('src', 'modules', 'Response/schema.gql'), 'utf-8')

export default {
  typeDefs: schema,
}
