import type { MutationResolvers, QueryResolvers } from 'types/graphql'

import { validate } from '@redwoodjs/api'

import { db } from 'src/lib/db'

export const contacts: QueryResolvers['contacts'] = () => {
  return db.contact.findMany()
}

export const contact: QueryResolvers['contact'] = ({ id }) => {
  return db.contact.findUnique({
    where: { id }
  })
}

export const createContact: MutationResolvers['createContact'] = ({ input }) => {
  validate(input.name, 'name', { presence: true, length: { min: 4 } })
  validate(input.message, 'message', { presence: true, length: { min: 10 } })
  validate(input.email, 'email', { presence: true, email: true })

  return db.contact.create({
    data: input
  })
}

export const deleteContact: MutationResolvers['deleteContact'] = ({ id }) => {
  return db.contact.delete({
    where: { id }
  })
}
