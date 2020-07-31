import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Layout({ id, children }) {
	const router = useRouter();

	return (
		<div id="layout">
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
					<a className="site-title">COVID Test Triage Tool</a>
				</Link>
			</header>
			<main id={id}>{children}</main>
			<footer className="site-footer"></footer>
		</div>
	);
}