import type { Prisma, Post } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.PostCreateArgs>({
  post: {
    one: { data: { title: 'String', body: 'String', updatedAt: '2024-09-14T09:56:41.771Z' } },
    two: { data: { title: 'String', body: 'String', updatedAt: '2024-09-14T09:56:41.771Z' } }
  }
})

export type StandardScenario = ScenarioData<Post, 'post'>
