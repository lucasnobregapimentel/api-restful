import fastify from 'fastify'
import { usersRoutes } from './http/controllers/users/routes'
import jwt from '@fastify/jwt'
import cookie from '@fastify/cookie'
import { env } from './env'

export const app = fastify()

app.register(jwt, {
  secret: env.SECRET_TOKEN,
})

app.register(cookie)

app.register(usersRoutes, {
  prefix: 'users',
})
