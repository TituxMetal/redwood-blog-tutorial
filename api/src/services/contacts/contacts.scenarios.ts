import type { Prisma, Contact } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.ContactCreateArgs>({
  contact: {
    one: {
      data: {
        name: 'String',
        email: 'String',
        message: 'String',
        updatedAt: '2024-09-15T00:23:28.425Z'
      }
    },
    two: {
      data: {
        name: 'String',
        email: 'String',
        message: 'String',
        updatedAt: '2024-09-15T00:23:28.425Z'
      }
    }
  }
})

export type StandardScenario = ScenarioData<Contact, 'contact'>
