import React from 'react';
import {icons} from 'react-icons';
import {Link} from 'react-router-dom';
import logo from '.././netflixLogo.png';
import {ImSearch} from 'react-icons/im';
const Header = () => {
	return (
		<nav className="header">
			<img src={logo} alt="logo" />
			<div>
				<Link to="/tvshows">Tv Shows</Link>
				<Link to="/movies">Movies</Link>
				<Link to="/recentlyadded">Recently Added</Link>
				<Link to="/mylist">My List</Link>
			</div>
			<ImSearch />
		</nav>
	);
};

export default Header;
