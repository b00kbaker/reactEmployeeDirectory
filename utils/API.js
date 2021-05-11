import axios from "axios";

export default{
 getRandomPeople: function(){
   return axios.get("https://randomuser.me/api/?inc=100,nat,name,email,dob,phone,picture");
 }
    // use randomAPI to get (x) amount of results to populate page
   //  not able to specify thumbnail photo in this call and getting full name object and full dob object- don't need to display all of the data
};

// api call results.name
//   results.email
//   results.phone
//   results.picture.thumbnail
//   results.info.seed?


