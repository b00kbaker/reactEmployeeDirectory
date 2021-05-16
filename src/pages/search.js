import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";
import "../pages/styles.css";
import Title from "../components/Title/index";



function SearchForm ({ search, handleFormSubmit, handleInputChange }){
return (
<form>
 <div className="form-group">
  <Title />
 <div className="inputContainer">
  <input
   value={search}
   onChange={handleInputChange}
   name="search"
   className="Category"
   placeholder="Search"
   id="search"
  /> 
  <FontAwesomeIcon
   className="caret"
   icon={faWindowClose}
   onClick={handleFormSubmit}
   />
  </div>
  </div>
 </form>
 );

}

export default SearchForm;