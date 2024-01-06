import { PrismaPostsRepository } from '../../repositories/prisma/prisma-posts-repository'
import { CreatePostUseCase } from '../create-post'

export function makeCreatePostUseCase() {
  const postsRepository = new PrismaPostsRepository()
  const createPostUseCase = new CreatePostUseCase(postsRepository)

  return createPostUseCase
}
