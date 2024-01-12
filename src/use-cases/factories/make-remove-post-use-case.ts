import { PrismaPostsRepository } from '../../repositories/prisma/prisma-posts-repository'
import { RemovePostUseCase } from '../remove-post'

export function makeRemovePostUseCase() {
  const postsRepository = new PrismaPostsRepository()
  const removePostUseCase = new RemovePostUseCase(postsRepository)

  return removePostUseCase
}
