import { FastifyInstance } from 'fastify'
import { verifyJwt } from '../../middlewares/verify-jwt'
import { create } from './create'
import { getAllPosts } from './get-all-posts'
import { getPost } from './get-post'
import { getUserPosts } from './get-user-posts'

export async function postsRoutes(app: FastifyInstance) {
  app.get('/', getAllPosts)
  app.get('/:id', getPost)
  app.get('/users/:userId', getUserPosts)
  app.post('/', { onRequest: [verifyJwt] }, create)
}
