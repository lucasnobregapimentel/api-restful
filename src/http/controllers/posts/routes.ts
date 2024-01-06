import { FastifyInstance } from 'fastify'
import { verifyJwt } from '../../middlewares/verify-jwt'
import { create } from './create'

export async function postsRoutes(app: FastifyInstance) {
  app.post('/', { onRequest: [verifyJwt] }, create)
}
