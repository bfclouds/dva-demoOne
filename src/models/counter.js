const defaultState = {
  count: 0,
};

export default {
  namespace: 'counter',
  state: {
    ...defaultState
  },
  reducers: {
    save(state, action) {
      return {
        ...state,
        ...action.payload
      }
    },
    reset(state) {
      console.log(state)
      return {
        ...state,
        ...defaultState
      }
    }
  }
}
