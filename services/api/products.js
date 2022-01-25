export const products = (httpClient) => {

    return {

        addProduct: async (product) => {

            return await httpClient.post('/products', product).then( response => {
                return response;
            })
        },

        getProducts: async () => {

            return await httpClient.get(`/products`).then( response => {
                return response;
            })
        }
    }
}