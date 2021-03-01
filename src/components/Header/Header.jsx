import React from 'react';
import styles from './Header.module.css'
import HeaderItem from './HeaderItem/HeaderItem'


const Header = (props) => {
	return (
		<header className={styles.wrapper}>
			<div className={styles.searchWrapper}>
				<label htmlFor="main-search" className={styles.searchIcon}></label>
				<input id='main-search' type="search" name="Search" placeholder='Search...' className={styles.search} />
			</div>
			<div className={styles.linkWrapper}>
				<HeaderItem />
				<HeaderItem />
			</div>
		</header>
	);
}

export default Header;
