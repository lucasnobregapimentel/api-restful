import { PostsRepository } from '../repositories/posts-repository'

export class GetAllPostsUseCase {
  constructor(private postsRepository: PostsRepository) {}

  async execute() {
    const posts = await this.postsRepository.findMany()

    return {
      posts,
    }
  }
}
