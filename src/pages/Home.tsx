import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import ErrorBoundary from '../ErrorBoundries/ErrorBoundries';
import React from 'react';
import PortalFooter from '../components/footer/Portal';

const Main = React.lazy(() => import('../components/main/Main'));

const Home: React.FC = () => {
	return (
		<>
			<ErrorBoundary>
				<Header />
			</ErrorBoundary>

			<ErrorBoundary>
				<React.Suspense fallback={<p>loading...</p>}>
					<Main />
				</React.Suspense>
			</ErrorBoundary>

			<ErrorBoundary>
				<PortalFooter />
			</ErrorBoundary>
		</>
	);
};

export default Home;
