import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'
import { makeGetPostUseCase } from '../../../use-cases/factories/make-get-post-use-case'
import { IdNotFoundError } from '../../../use-cases/errors/id-not-found-error'

export async function getPost(request: FastifyRequest, reply: FastifyReply) {
  const paramsSchema = z.object({
    id: z.string().uuid(),
  })

  const { id } = paramsSchema.parse(request.params)

  try {
    const getPostUseCase = makeGetPostUseCase()

    const { post } = await getPostUseCase.execute({ id })

    return reply.status(200).send({
      post,
    })
  } catch (err) {
    if (err instanceof IdNotFoundError) {
      return reply.status(404).send({ message: err.message })
    }

    throw err
  }
}
