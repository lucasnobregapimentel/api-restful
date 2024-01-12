import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'
import { IdNotFoundError } from '../../../use-cases/errors/id-not-found-error'
import { UnauthorizedError } from '../../../use-cases/errors/unauthorized-error'
import { makeRemovePostUseCase } from '../../../use-cases/factories/make-remove-post-use-case'

export async function removePost(request: FastifyRequest, reply: FastifyReply) {
  const paramsSchema = z.object({
    id: z.string().uuid(),
  })

  const { id } = paramsSchema.parse(request.params)
  const userId = request.user.sub

  try {
    const removePostUseCase = makeRemovePostUseCase()

    await removePostUseCase.execute({ id, userId })

    return reply.status(204).send()
  } catch (err) {
    if (err instanceof IdNotFoundError) {
      return reply.status(404).send({ message: err.message })
    } else if (err instanceof UnauthorizedError) {
      return reply.status(401).send({ message: err.message })
    }

    return err
  }
}
