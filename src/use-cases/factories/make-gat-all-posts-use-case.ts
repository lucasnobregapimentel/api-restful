import { PrismaPostsRepository } from '../../repositories/prisma/prisma-posts-repository'
import { GetAllPostsUseCase } from '../get-all-posts'

export function makeGetAllPostsUseCase() {
  const postsRepository = new PrismaPostsRepository()
  const getAllPostsUseCase = new GetAllPostsUseCase(postsRepository)

  return getAllPostsUseCase
}
