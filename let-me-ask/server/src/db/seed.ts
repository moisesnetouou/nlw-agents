import { reset, seed } from 'drizzle-seed'
import { db, sql } from './connection.ts'
import { schema } from './schema/index.ts'

const safeSeedSchema = {
  rooms: schema.rooms,
  questions: schema.questions,
}

await reset(db, safeSeedSchema)

await seed(db, safeSeedSchema).refine((f) => {
  return {
    rooms: {
      count: 5,
      columns: {
        name: f.companyName(),
        description: f.loremIpsum(),
      },
      questions: {
        count: 5,
      },
    },
  }
})

await sql.end()

// biome-ignore lint/suspicious/noConsole: check seeded
console.log('Database seeded')
