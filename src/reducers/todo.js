export default function visibilityFilter(state = {a : 'b'}, action = {}) {
  switch (action.type) {
    case 'TESTE':
      return action.filter
    default:
      return state
  }
}