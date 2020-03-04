export default {
      namespace: 'app',

      state: {
            locale: 'en'
      },

      subscriptions: {
            setup({ dispatch }) {
                  dispatch({ type: 'query' })
            },
      },

      effects: {
            *query({ }, { }) {
            },
      }
}
