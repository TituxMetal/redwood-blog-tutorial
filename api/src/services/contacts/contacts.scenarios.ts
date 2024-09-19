import type { Contact, Prisma } from '@prisma/client'

import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.ContactCreateArgs>({
  contact: {
    one: {
      data: {
        name: 'John Doe',
        email: 'john@doe.com',
        message: 'Hello, I am John Doe',
        updatedAt: '2024-09-15T00:23:28.425Z'
      }
    },
    two: {
      data: {
        name: 'Jane Doe',
        email: 'jane@doe.com',
        message: 'Hello, I am Jane Doe',
        updatedAt: '2024-09-15T00:23:28.425Z'
      }
    }
  }
})

export type StandardScenario = ScenarioData<Contact, 'contact'>
