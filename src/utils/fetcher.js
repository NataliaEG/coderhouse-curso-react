
export const fetcher = (functionAsync, params) => {
    return  () => functionAsync(params)
}