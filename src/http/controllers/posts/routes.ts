import { FastifyInstance } from 'fastify'
import { verifyJwt } from '../../middlewares/verify-jwt'
import { create } from './create'
import { getAllPosts } from './get-all-posts'

export async function postsRoutes(app: FastifyInstance) {
  app.get('/', getAllPosts)
  app.post('/', { onRequest: [verifyJwt] }, create)
}
