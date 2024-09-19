import type { Contact } from '@prisma/client'

import { EmailValidationError } from '@redwoodjs/api'

import { contact, contacts, createContact, deleteContact } from './contacts'
import type { StandardScenario } from './contacts.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('contacts', () => {
  scenario('returns all contacts', async (scenario: StandardScenario) => {
    const result = await contacts()

    expect(result.length).toEqual(Object.keys(scenario.contact).length)
  })

  scenario('returns a single contact', async (scenario: StandardScenario) => {
    const result = await contact({ id: scenario.contact.one.id })

    expect(result).toEqual(scenario.contact.one)
  })

  scenario('creates a contact', async (scenario: StandardScenario) => {
    const input = {
      name: 'Titux',
      email: 'titux@test.com',
      message: 'Hello, I am Titux'
    }
    const result = await createContact({ input })

    const list = await contacts()

    expect(result.name).toEqual(input.name)
    expect(result.email).toEqual(input.email)
    expect(result.message).toEqual(input.message)
    expect(list.length).toEqual(Object.keys(scenario.contact).length + 1)
  })

  scenario('returns an error if the contact is not valid', async () => {
    expect(() =>
      createContact({
        input: {
          name: 'Titux',
          email: 'titux',
          message: 'Hello, I am John Doe'
        }
      })
    ).toThrow(EmailValidationError)
  })

  scenario('deletes a contact', async (scenario: StandardScenario) => {
    const original = (await deleteContact({ id: scenario.contact.one.id })) as Contact
    const result = await contact({ id: original.id })

    expect(result).toEqual(null)
  })
})
