import globaStyle from '../styles/globalStyle.scss';
import NotificationContainer from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import Layout from '../layouts/default';
import { UserProvider } from '../store/UserContext';
import { StorageManager } from '../services/storageManager';
import { ProductsProvider } from '../store/productsContext';
import { Provider } from 'react-redux';
import { store } from '../feature/store';
import React from "react";

function MyApp({ Component, pageProps }) {

	StorageManager.seeder();

	const getLayout = Component.getLayout || ((page) => <Layout>{page}</Layout>)

	return (
		<Provider store={store}>
			<ProductsProvider>
				{ getLayout(<Component {...pageProps} />) }
			</ProductsProvider>
		</Provider>
	);
}

export default MyApp