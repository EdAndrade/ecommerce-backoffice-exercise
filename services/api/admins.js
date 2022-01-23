export const admins = (httpClient) => {

    return {

        performLogin: async (user) => {

            return await httpClient.get(`/admins?phoneNumber=${user.phoneNumber}&password=${user.password}`).then( response => {
                return response;
            })
        }
    }
}