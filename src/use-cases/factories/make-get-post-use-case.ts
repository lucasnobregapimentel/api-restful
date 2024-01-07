import { PrismaPostsRepository } from '../../repositories/prisma/prisma-posts-repository'
import { GetPostUseCase } from '../get-post'

export function makeGetPostUseCase() {
  const postsRepository = new PrismaPostsRepository()
  const getPostUseCase = new GetPostUseCase(postsRepository)

  return getPostUseCase
}
