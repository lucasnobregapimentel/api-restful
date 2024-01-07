import { PrismaPostsRepository } from '../../repositories/prisma/prisma-posts-repository'
import { GetUserPostsUseCase } from '../get-user-posts'

export function makeGetUserPostsUseCase() {
  const postsRepository = new PrismaPostsRepository()
  const getUserPostsUseCase = new GetUserPostsUseCase(postsRepository)

  return getUserPostsUseCase
}
