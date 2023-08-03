import { ApolloServer, BaseContext } from '@apollo/server'
import { expressMiddleware } from '@apollo/server/express4'
import cors from 'cors'
import express from 'express'
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer'
import http from 'http'
import resolve from 'path'
import { graphqlUploadExpress } from 'graphql-upload-ts'

import schema from './modules/'

// TypeORM
import AppDataSource from './config/config'

// Express settings
const app = express()
const httpServer = http.createServer(app)

!(async function () {
  const server = new ApolloServer<BaseContext>({
    schema,
    csrfPrevention: false,

    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  })
  app.use(express.json())
  app.use('/images', express.static('uploads'))

  await server.start()
  app.use(
    '/graphql',

    graphqlUploadExpress({ maxFileSize: 10000000, maxFiles: 1 }),
    cors<cors.CorsRequest>(),

    express.json(),
    expressMiddleware(server, {
      context: async ({ req }): Promise<BaseContext> => {
        return { token: req.headers.authorization }
      },
    })
  )
  app.listen({ port: 4000 }, () => console.log('4000'))
  await AppDataSource.initialize()

  console.log(`Server ready at http://localhost:4000/`)
})()
