import type { Comment, Post, Prisma } from '@prisma/client'

import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.CommentCreateArgs>({
  comment: {
    one: {
      data: {
        name: 'Jane Doe',
        body: 'I like trees',
        post: {
          create: {
            title: 'Redwood Leaves',
            body: 'The quick brown fox jumped over the lazy dog.'
          }
        }
      }
    },
    two: {
      data: {
        name: 'John Doe',
        body: 'I like cars',
        post: {
          create: {
            title: 'Tesla Model S',
            body: 'The five boxing wizards jump quickly.'
          }
        }
      }
    }
  }
})

export const postOnly = defineScenario<Prisma.PostCreateArgs>({
  post: {
    bark: {
      data: {
        title: 'Bark',
        body: `A tree's bark is worse than its bite.`
      }
    }
  }
})

export type StandardScenario = ScenarioData<Comment, 'comment'>
export type PostOnlyScenario = ScenarioData<Post, 'post'>
