import { Post } from '@prisma/client'
import { PostsRepository } from '../repositories/posts-repository'
import { IdNotFoundError } from './errors/id-not-found-error'

interface GetUserPostsUseCaseRequest {
  userId: string
}

interface GetUserPostsUseCaseResponse {
  posts: Post[]
}

export class GetUserPostsUseCase {
  constructor(private postsRepository: PostsRepository) {}

  async execute({
    userId,
  }: GetUserPostsUseCaseRequest): Promise<GetUserPostsUseCaseResponse> {
    const doesUserExists = await this.postsRepository.findByUserId(userId)

    if (!doesUserExists) {
      throw new IdNotFoundError()
    }

    const posts = await this.postsRepository.findManyByUserId(userId)

    return {
      posts,
    }
  }
}
