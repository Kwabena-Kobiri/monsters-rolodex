import React from 'react';
import './search-box.styles.css';

export const Search = () => {
    return (
        <div>
            <input 
            className='search'
            type='search' 
            placeholder='search monsters' 
            onChange={e => 
              this.setState({ searchField: e.target.value })}
            />
        </div> 
    )
}
