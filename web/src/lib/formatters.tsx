import humanize from 'humanize-string'

const MAX_STRING_LENGTH = 150

export const formatEnum = (values: string | string[] | null | undefined) => {
  if (Array.isArray(values)) {
    const humanizedValues = values.map(value => humanize(value))
    return humanizedValues.join(', ')
  }

  if (typeof values === 'string') {
    return humanize(values)
  }

  return ''
}

export const jsonDisplay = (obj: unknown) => {
  return (
    <pre>
      <code>{JSON.stringify(obj, null, 2)}</code>
    </pre>
  )
}

export const truncate = (value: string | number) => {
  let output = value?.toString() ?? ''

  if (output.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...'
  }

  return output
}

export const jsonTruncate = (obj: unknown) => {
  return truncate(JSON.stringify(obj, null, 2))
}

export const timeTag = (dateTime?: string) => {
  let output: string | JSX.Element = ''

  if (dateTime) {
    output = (
      <time dateTime={dateTime} title={dateTime}>
        {new Date(dateTime).toUTCString()}
      </time>
    )
  }

  return output
}

export const formattedDate = (
  datetime: ConstructorParameters<typeof Date>[0],
  withTime: boolean = false
) => {
  const parsedDate = new Date(datetime)
  const month = parsedDate.toLocaleString('default', { month: 'long' })
  const day = parsedDate.getDate()
  const year = parsedDate.getFullYear()
  const hour = parsedDate.toISOString().slice(11, 13)
  const minute = parsedDate.toISOString().slice(14, 16)

  return `${month} ${day}, ${year}${withTime ? ` at ${hour}:${minute}` : ''}`
}

export const checkboxInputTag = (checked: boolean) => {
  return <input type='checkbox' checked={checked} disabled />
}
