import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'
import { IdNotFoundError } from '../../../use-cases/errors/id-not-found-error'
import { makeGetUserPostsUseCase } from '../../../use-cases/factories/make-get-user-posts-use-case'

export async function getUserPosts(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const paramsSchema = z.object({
    userId: z.string().uuid(),
  })

  const { userId } = paramsSchema.parse(request.params)

  try {
    const getUserPostsUseCase = makeGetUserPostsUseCase()

    const { posts } = await getUserPostsUseCase.execute({
      userId,
    })

    return reply.status(200).send({
      posts,
    })
  } catch (err) {
    if (err instanceof IdNotFoundError) {
      return reply.status(404).send({ message: err.message })
    }

    return err
  }
}
