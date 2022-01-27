import globaStyle from '../styles/globalStyle.scss';
import NotificationContainer from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import Layout from '../layouts/default';
import { UserProvider } from '../store/UserContext';
import { StorageManager } from '../services/storageManager';
import { ProductsProvider } from '../store/productsContext';

function MyApp({ Component, pageProps }) {

	StorageManager.seeder();

	const getLayout = Component.getLayout || ((page) => <Layout>{page}</Layout>)

	return (
		<ProductsProvider>
			{ getLayout(<Component {...pageProps} />) }
		</ProductsProvider>
	);
}

export default MyApp