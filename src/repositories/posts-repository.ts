import { Post, Prisma, User } from '@prisma/client'

export interface PostsRepository {
  findById(id: string): Promise<Post | null>
  findByUserId(userId: string): Promise<User | null>
  findMany(): Promise<Post[]>
  findManyByUserId(userId: string): Promise<Post[]>
  create(data: Prisma.PostUncheckedCreateInput): Promise<Post>
  removePost(id: string): Promise<Post>
}
