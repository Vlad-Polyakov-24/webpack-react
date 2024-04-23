import styles from './PageError.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import Button, { ThemeButton } from 'shared/ui/Button/Button';

type PageErrorProps = {
	className?: string;
};

const PageError = ({ className }: PageErrorProps) => {
	const onReload = () => location.reload();

	return (
		<div className={ classNames(styles.pageError, {}, [className]) }>
			<h1>An error has occurred!</h1>
			<Button theme={ ThemeButton.ERROR } onClick={ onReload }>
				Refresh the page
			</Button>
		</div>
	);
};

export default PageError;
