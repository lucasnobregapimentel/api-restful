import { Prisma } from '@prisma/client'
import { prisma } from '../../lib/prisma'
import { PostsRepository } from '../posts-repository'

export class PrismaPostsRepository implements PostsRepository {
  async findById(id: string) {
    const post = await prisma.post.findUnique({
      where: {
        id,
      },
    })

    return post
  }

  async findByUserId(userId: string) {
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    })

    return user
  }

  async findMany() {
    const posts = await prisma.post.findMany()

    return posts
  }

  async create(data: Prisma.PostUncheckedCreateInput) {
    const post = await prisma.post.create({
      data,
    })

    return post
  }
}
