import { Post } from '@prisma/client'
import { PostsRepository } from '../repositories/posts-repository'
import { IdNotFoundError } from './errors/id-not-found-error'

interface CreatePostUseCaseRequest {
  title: string
  content: string
  userId: string
  author: string
}

interface CreatePostUseCaseResponse {
  post: Post
}

export class CreatePostUseCase {
  constructor(private postsRepository: PostsRepository) {}

  async execute({
    title,
    content,
    userId,
    author,
  }: CreatePostUseCaseRequest): Promise<CreatePostUseCaseResponse> {
    const doesUserIdExists = await this.postsRepository.findByUserId(userId)

    if (!doesUserIdExists) {
      throw new IdNotFoundError()
    }

    const post = await this.postsRepository.create({
      title,
      content,
      userId,
      author,
    })

    return {
      post,
    }
  }
}
