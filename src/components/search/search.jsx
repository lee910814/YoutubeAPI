import React, { useRef} from 'react';
import styles from './search.module.css'

const Search = ({onSearch}) => {
    const inputRef = useRef();
    const handleSearch = () => {
        const value = inputRef.current.value;
        console.log(value);
        onSearch(value);
    }
    const onClick = () => {
        handleSearch();
    } 
    const onKeyPress = (event) => {
        if(event.key==='Enter'){
            handleSearch();
        };
    }
    return(
        <div className={styles.header}>

        {/*center*/}
        <div className={styles.nav_center}>
            <div className={styles.search}>
                <input 
                ref={inputRef}
                type="text" 
                placeholder="Search" 
                className={styles.search_box} 
                onKeyPress={onKeyPress}/>
                <button className={styles.search_btn} onClick={onClick}>
                    <i className="fas fa-search"></i>
                </button>
            </div>
        </div>
    </div>
    )
}

export default Search;