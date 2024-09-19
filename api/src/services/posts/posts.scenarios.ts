import type { Post, Prisma } from '@prisma/client'

import type { ScenarioData } from '@redwoodjs/testing/api'

const user = {
  john: {
    name: 'John Doe',
    email: 'john@doe.com',
    hashedPassword: 'hashedPassword123',
    salt: 'randomSalt123'
  },
  jane: {
    name: 'Jane Doe',
    email: 'jane@doe.com',
    hashedPassword: 'hashedPassword456',
    salt: 'randomSalt456'
  }
}

export const standard = defineScenario<Prisma.PostCreateArgs>({
  post: {
    one: {
      data: {
        title: 'String',
        body: 'String',
        user: {
          create: user.john
        },
        updatedAt: '2024-09-14T09:56:41.771Z'
      }
    },
    two: {
      data: {
        title: 'String',
        body: 'String',
        user: {
          create: user.jane
        },
        updatedAt: '2024-09-14T09:56:41.771Z'
      }
    }
  }
})

export type StandardScenario = ScenarioData<Post, 'post'>
