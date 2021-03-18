import React from 'react';
import styles from './Header.module.css'
import HeaderItem from './HeaderItem/HeaderItem'
import {NavLink} from "react-router-dom";


const Header = (props) => {
	return (
		<header className={styles.wrapper}>
			<div className={styles.searchWrapper}>
				<label htmlFor="main-search" className={styles.searchIcon}/>
				<input id='main-search' type="search" name="Search" placeholder='Search...' className={styles.search} />
			</div>
			<div className={styles.linkWrapper}>
				<div>
					<p>{props.login || <NavLink to='/login'>Login</NavLink> }</p>
					{props.login ? <button onClick={props.logoutUser}>logout</button> : null}
				</div>
				<HeaderItem />
				<HeaderItem />
			</div>
		</header>
	);
}

export default Header;
