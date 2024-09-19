import type { Comment, Post, Prisma } from '@prisma/client'

import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.CommentCreateArgs>({
  comment: {
    jane: {
      data: {
        name: 'Jane Doe',
        body: 'I like trees',
        post: {
          create: {
            title: 'Redwood Leaves',
            body: 'The quick brown fox jumped over the lazy dog.',
            user: {
              create: {
                name: 'John Doe',
                email: 'john@doe.com',
                hashedPassword: '1234567890',
                salt: '1234567890'
              }
            }
          }
        }
      }
    },
    john: {
      data: {
        name: 'John Doe',
        body: 'I like cars',
        post: {
          create: {
            title: 'Tesla Model S',
            body: 'The five boxing wizards jump quickly.',
            user: {
              create: {
                name: 'Jane Doe',
                email: 'jane@doe.com',
                hashedPassword: '1234567890',
                salt: '1234567890'
              }
            }
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
        body: `A tree's bark is worse than its bite.`,
        user: {
          create: {
            name: 'Hugo Doe',
            email: 'hugo@doe.com',
            hashedPassword: '1234567890',
            salt: '1234567890'
          }
        }
      }
    }
  }
})

export type StandardScenario = ScenarioData<Comment, 'comment'>
export type PostOnlyScenario = ScenarioData<Post, 'post'>
