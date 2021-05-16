import axios from "axios";
const peopleURL = "https://randomuser.me/api/?results=20&nat=us";

export default{
 search: function(){
   return axios.get(peopleURL);
 }
    // use randomAPI to get 100 results to populate page
};



