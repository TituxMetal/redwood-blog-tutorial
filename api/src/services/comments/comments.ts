import type { Prisma } from '@prisma/client'
import type { CommentRelationResolvers, MutationResolvers, QueryResolvers } from 'types/graphql'

import { db } from 'src/lib/db'

export const comments: QueryResolvers['comments'] = ({
  postId
}: Required<Pick<Prisma.CommentWhereInput, 'postId'>>) => {
  return db.comment.findMany({
    where: { postId }
  })
}

export const Comment: CommentRelationResolvers = {
  post: (_obj, { root }) => {
    return db.comment.findUnique({ where: { id: root?.id } }).post()
  }
}

export const createComment: MutationResolvers['createComment'] = ({ input }) => {
  return db.comment.create({
    data: input
  })
}

export const deleteComment: MutationResolvers['deleteComment'] = ({ id }) => {
  return db.comment.delete({
    where: { id }
  })
}
