import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Layout({ config: { title }, id, children }) {
	const router = useRouter();

	return (
		<div id="layout" lang="en">
			<header className="site-header">
				{Object.keys(router.query).length > 0 && (
					<a
						href="#"
						className="back-button"
						title="Go back"
						onClick={event => {
							event.preventDefault();
							router.back();
						}}
					>
						←
					</a>
				)}
				<Link href="/">
					<a className="site-title">{title}</a>
				</Link>
			</header>
			<main id={id}>{children}</main>
			<footer className="site-footer"></footer>
		</div>
	);
}
