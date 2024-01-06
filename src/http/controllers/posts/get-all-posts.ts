import { FastifyReply, FastifyRequest } from 'fastify'
import { makeGetAllPostsUseCase } from '../../../use-cases/factories/make-gat-all-posts-use-case'

export async function getAllPosts(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const getAllPostsUseCase = makeGetAllPostsUseCase()

  const { posts } = await getAllPostsUseCase.execute()

  return reply.status(200).send({ posts })
}
