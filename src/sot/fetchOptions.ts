
export const fetchWithOptions = async (
    options: {
      method: string
      headers: {}
      body: string
    },
    url: string,
  ) => {
    const newOptions = { ...options }
    return fetch(url, newOptions)
  }