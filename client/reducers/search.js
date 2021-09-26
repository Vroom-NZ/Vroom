const initialSearch = {
  startLocation: '',
  destination: '',
  date: '',
  seatsAvailable: ''
}

function reduceSearch (state = initialSearch, action) {
  switch (action.type) {
    case 'SEARCH':
      return action.search
    default:
      return state
  }
}

export default reduceSearch
