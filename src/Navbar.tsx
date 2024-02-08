import { useRef, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { links, social } from './data.tsx';
import logo from './logo.svg';
import { FaLinesLeaning } from 'react-icons/fa6';

const Navbar = () => {
	const [showLinks, setShowLinks] = useState(false);
	const linksContainerRefs = useRef<HTMLDivElement>(null);
	const linksRef = useRef<HTMLUListElement>(null);

	const toggleLinks = () => {
		setShowLinks(!showLinks);
	};

	const linkStyles = { height: showLinks ? `${linksRef.current!.getBoundingClientRect().height}px` : '0px' };

	return (
		<nav>
			<div className="nav-center">
				<div className="nav-header">
					<img src={logo} className="logo" alt="logo" />
					<button className="nav-toggle" onClick={toggleLinks}>
						<FaBars />
					</button>
				</div>

				<div className="links-container" ref={linksContainerRefs} style={linkStyles}>
					<ul className="links" ref={linksRef}>
						{links.map((link) => {
							const { id, url, text } = link;
							return (
								<li key={id}>
									<a href={url}>{text}</a>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
