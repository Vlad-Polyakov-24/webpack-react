import Container from 'shared/ui/Container/Container';
import { Counter } from 'entities/Counter';
import Input from "shared/ui/Input/Input";

const MainPage = () => {
	return (
		<section>
			<Container>
				<h1 className='section-title'>Main Page</h1>
				<Counter/>
				<Input label='Label'/>
			</Container>
		</section>
	);
};

export default MainPage;
