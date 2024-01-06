import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'
import { makeCreatePostUseCase } from '../../../use-cases/factories/make-create-post-use-case'
import { IdNotFoundError } from '../../../use-cases/errors/id-not-found-error'

export async function create(request: FastifyRequest, reply: FastifyReply) {
  const paramsSchema = z.object({
    userId: z.string().uuid(),
  })

  const bodySchema = z.object({
    title: z.string(),
    content: z.string(),
  })

  const { userId } = paramsSchema.parse(request.params)

  const { title, content } = bodySchema.parse(request.body)

  try {
    const createPostUseCase = makeCreatePostUseCase()

    await createPostUseCase.execute({
      title,
      content,
      userId,
    })
  } catch (err) {
    if (err instanceof IdNotFoundError) {
      return reply.status(404).send({ message: err.message })
    }

    throw err
  }

  return reply.status(201).send()
}
