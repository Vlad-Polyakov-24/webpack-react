import Container from 'shared/ui/Container/Container';
import { Counter } from 'entities/Counter';

const MainPage = () => {
	return (
		<section>
			<Container>
				<h1 className='section-title'>Main Page</h1>
				<Counter/>
			</Container>
		</section>
	);
};

export default MainPage;
