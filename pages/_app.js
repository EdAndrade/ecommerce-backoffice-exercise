import globaStyle from '../styles/globalStyle.scss';
import Layout from '../layouts/default';
import NotificationContainer from 'react-notifications';
import 'react-notifications/lib/notifications.css';

function MyApp({ Component, pageProps }) {
	return (
		<Layout>
			<Component {...pageProps} />
			<NotificationContainer />
		</Layout>
	);
}

export default MyApp