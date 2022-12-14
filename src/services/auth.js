export default (httpClient) => ({
  login: async ({ email, password }) => {
    const response = await httpClient.post('/auth/login', { email, password })

    const errors = null

    if (!response.data) {
      status: response.request.status
      statusText: response.request.statusText
    }

    return {
      data: response.data,
      errors
    }
  }
})
