import { AppRouter } from 'app/providers/AppRouter';
import { Header } from 'widgets/Header';
import { Sidebar } from 'widgets/Sidebar';
import { Footer } from 'widgets/Footer';

const App = () => {
	return (
		<div className='app'>
			<Header/>
			<div className='page'>
				<Sidebar/>
				<AppRouter/>
			</div>
			<Footer/>
		</div>
	);
};

export default App;
