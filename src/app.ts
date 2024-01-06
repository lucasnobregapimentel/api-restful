import fastify from 'fastify'
import { usersRoutes } from './http/controllers/users/routes'
import jwt from '@fastify/jwt'
import cookie from '@fastify/cookie'
import { env } from './env'
import { postsRoutes } from './http/controllers/posts/routes'

export const app = fastify()

app.register(jwt, {
  secret: env.SECRET_TOKEN,
  cookie: {
    cookieName: 'token',
    signed: false,
  },
  sign: {
    expiresIn: '30 days',
  },
})

app.register(cookie)

app.register(usersRoutes, {
  prefix: 'users',
})

app.register(postsRoutes, {
  prefix: 'posts',
})
