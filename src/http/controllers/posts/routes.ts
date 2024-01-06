import { FastifyInstance } from 'fastify'
import { verifyJwt } from '../../middlewares/verify-jwt'
import { create } from './create'

export async function postsRoutes(app: FastifyInstance) {
  app.post('/:userId', { onRequest: [verifyJwt] }, create)
}
