import type { Post, User } from '@prisma/client'

import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario({
  user: {
    john: {
      data: {
        name: 'John Doe',
        email: 'john@doe.com',
        roles: 'admin',
        hashedPassword: 'hashedPassword',
        salt: 'salt'
      }
    },
    jane: {
      data: {
        name: 'Jane Doe',
        email: 'jane@doe.com',
        hashedPassword: 'hashedPassword',
        salt: 'salt'
      }
    }
  },
  post: {
    john: scenario => ({
      data: {
        title: `John's Post`,
        body: `John's Post Body`,
        userId: scenario.user.john.id,
        updatedAt: '2024-09-14T09:56:41.771Z'
      }
    }),
    jane: scenario => ({
      data: {
        title: `Jane's Post`,
        body: `Jane's Post Body`,
        userId: scenario.user.jane.id,
        updatedAt: '2024-09-14T09:56:41.771Z'
      }
    })
  }
})

export type StandardScenario = ScenarioData<{
  post: { john: Post; jane: Post }
  user: { john: User; jane: User }
}>
