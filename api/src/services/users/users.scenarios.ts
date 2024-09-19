import type { Prisma, User } from '@prisma/client'

import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.UserCreateArgs>({
  user: {
    one: {
      data: {
        email: 'String7268644',
        hashedPassword: 'String',
        salt: 'String',
        updatedAt: '2024-09-19T16:05:25.524Z'
      }
    },
    two: {
      data: {
        email: 'String7928400',
        hashedPassword: 'String',
        salt: 'String',
        updatedAt: '2024-09-19T16:05:25.524Z'
      }
    }
  }
})

export type StandardScenario = ScenarioData<User, 'user'>
