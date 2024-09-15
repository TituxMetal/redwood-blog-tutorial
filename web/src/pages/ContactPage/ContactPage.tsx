import { CreateContactMutation, CreateContactMutationVariables } from 'types/graphql'

import {
  FieldError,
  Form,
  Label,
  Submit,
  TextAreaField,
  TextField,
  useForm
} from '@redwoodjs/forms'
import { Metadata, useMutation } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/toast'

const CREATE_CONTACT = gql`
  mutation CreateContactMutation($input: CreateContactInput!) {
    createContact(input: $input) {
      id
    }
  }
`

interface FormValues {
  name: string
  email: string
  message: string
}

const ContactPage = () => {
  const formMethods = useForm<FormValues>({ mode: 'onBlur' })
  const [createContact, { loading, error }] = useMutation<
    CreateContactMutation,
    CreateContactMutationVariables
  >(CREATE_CONTACT, {
    onCompleted: () => {
      toast.success('Thank you for your message!')
    }
  })
  const onSubmit = (data: FormValues) => {
    console.log(data)
    createContact({ variables: { input: data } })
    formMethods.reset()
  }

  return (
    <>
      <Metadata title='Contact Us' description='Contact us' />

      <Toaster toastOptions={{ duration: 5000 }} />

      <h1 className='my-8 text-center text-4xl font-bold  text-sky-200'>Contact Us</h1>
      <Form
        onSubmit={onSubmit}
        config={{ mode: 'onBlur' }}
        className='mx-auto flex max-w-xl flex-col gap-2 rounded-md bg-sky-800 p-4'
        error={error}
        formMethods={formMethods}
      >
        <Label
          name='name'
          className='font-bold text-sky-200'
          errorClassName='text-red-400 font-bold'
        >
          Name
        </Label>
        <TextField
          errorClassName='rounded-md border-2 border-red-400 bg-red-800/75 focus:outline-none focus:ring-2 focus:ring-red-600 p-2 text-red-200'
          className='rounded-md border-2 border-sky-600 bg-sky-800 p-2 text-sky-200 focus:outline-none focus:ring-2 focus:ring-sky-600'
          name='name'
          validation={{ required: true }}
        />
        <FieldError name='name' className='font-bold text-red-400' />
        <Label
          name='email'
          errorClassName='text-red-400 font-bold'
          className='font-bold text-sky-200'
        >
          Email
        </Label>
        <TextField
          name='email'
          errorClassName='rounded-md border-2 border-red-400 bg-red-800/75 focus:outline-none focus:ring-2 focus:ring-red-600 p-2 text-red-200'
          className='rounded-md border-2 border-sky-600 bg-sky-800 p-2 text-sky-200 focus:outline-none focus:ring-2 focus:ring-sky-600'
          validation={{
            required: true,
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: 'Invalid email address'
            }
          }}
        />
        <FieldError name='email' className='font-bold text-red-400' />
        <Label name='message' className='font-bold text-sky-200'>
          Message
        </Label>
        <TextAreaField
          name='message'
          errorClassName='rounded-md border-2 border-red-400 bg-red-800/75 focus:outline-none focus:ring-2 focus:ring-red-600 p-2 text-red-200'
          className='rounded-md border-2 border-sky-600 bg-sky-800 p-2 text-sky-200 focus:outline-none focus:ring-2 focus:ring-sky-600'
          validation={{ required: true }}
        />
        <FieldError name='message' className='font-bold text-red-400' />
        <Submit
          disabled={loading}
          className='rounded-md border-2 border-sky-600 bg-zinc-800 p-2 text-sky-200 hover:bg-zinc-700 hover:text-zinc-100'
        >
          Send
        </Submit>
      </Form>
    </>
  )
}

export default ContactPage
