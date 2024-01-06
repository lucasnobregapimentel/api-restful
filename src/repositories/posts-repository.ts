import { Post, Prisma, User } from '@prisma/client'

export interface PostsRepository {
  findById(id: string): Promise<Post | null>
  findByUserId(userId: string): Promise<User | null>
  create(data: Prisma.PostUncheckedCreateInput): Promise<Post>
}