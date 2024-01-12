import { Post } from '@prisma/client'
import { PostsRepository } from '../repositories/posts-repository'
import { IdNotFoundError } from './errors/id-not-found-error'
import { UnauthorizedError } from './errors/unauthorized-error'

interface RemovePostUseCaseRequest {
  id: string
  userId: string
}

interface RemovePostUseCaseResponse {
  post: Post
}

export class RemovePostUseCase {
  constructor(private postsRepository: PostsRepository) {}

  async execute({
    id,
    userId,
  }: RemovePostUseCaseRequest): Promise<RemovePostUseCaseResponse> {
    const post = await this.postsRepository.findById(id)

    if (!post) {
      throw new IdNotFoundError()
    }

    if (post.userId === userId) {
      await this.postsRepository.removePost(id)
    } else {
      throw new UnauthorizedError()
    }

    return {
      post,
    }
  }
}
