import { Post } from '@prisma/client'
import { PostsRepository } from '../repositories/posts-repository'
import { IdNotFoundError } from './errors/id-not-found-error'

interface GetPostUseCaseRequest {
  id: string
}

interface GetPostUseCaseResponse {
  post: Post
}

export class GetPostUseCase {
  constructor(private postsRepository: PostsRepository) {}

  async execute({
    id,
  }: GetPostUseCaseRequest): Promise<GetPostUseCaseResponse> {
    const post = await this.postsRepository.findById(id)

    if (!post) {
      throw new IdNotFoundError()
    }

    return {
      post,
    }
  }
}
