import React from 'react';
import styles from './Header.module.css'


const Header = (props) => {
	return (
		<header className={styles.wrapper}>
			<button className={`${styles.menu} ${props.active ? styles.active : null}`}
					onClick={() => {props.setActive(!props.active)}}>
				<span className='visuallyHidden'>Show menu</span>
			</button>
			<div className={styles.searchWrapper}>
				<label htmlFor="main-search" className={styles.searchIcon}/>
				<input id='main-search' type="search" name="Search" placeholder='Search...' className={styles.search} />
			</div>
		</header>
	);
}

export default Header;
