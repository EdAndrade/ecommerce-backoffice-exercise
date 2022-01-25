export const products = (httpClient) => {

    return {

        getProducts: async () => {

            return await httpClient.get(`/products`).then( response => {
                return response;
            })
        }
    }
}