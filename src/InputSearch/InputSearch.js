import React from 'react';
import './InputSearch.css'

const inputsearch =  (props) => { 
   return (

    <form className="search-form">
    <input type="text" className="search-input" onChange={props.changed} value={props.value}/>
      <div type="submit" className="search-button">
        <i className="fas fa-search"></i>
      </div>
    </form>
      
   )
}
 export default inputsearch ;