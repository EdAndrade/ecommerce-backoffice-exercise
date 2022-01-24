import globaStyle from '../styles/globalStyle.scss';
import NotificationContainer from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import Layout from '../layouts/default';

function MyApp({ Component, pageProps }) {

	const getLayout = Component.getLayout || ((page) => <Layout>{page}</Layout>)

	return getLayout(
		<section>
			<Component {...pageProps} />
			<NotificationContainer />
		</section>
	);
}

export default MyApp