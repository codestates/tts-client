export const SET_LOADING = "SET_LOADING";

export const setIsLoading = (boolean) => {
  return {
    type: SET_LOADING,
    payload: {
      isLoading: boolean
    }
  }
}