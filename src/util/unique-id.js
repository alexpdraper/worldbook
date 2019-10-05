let counter = 0
const rootId = 'world'

export default function uniqueId () {
  return `${rootId}-${++counter}`
}
