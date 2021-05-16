// import React, { Component } from "react";
// import API from "../../../utils/API";
// import search from "../../pages/search.js";

// class Table extends Component {
//   state = {
//     sortName: "",
//     search: "",
//     results: [],
//   };

//   componentDidMount() {
//     this.searchEmployees("");
//   }

//   searchEmployees = (search) => {
//     API.getData(search)
//       .then((res) => this.setState({ results: res.data.results }))
//       .catch((err) => console.log(err));
//   };

//   handleInputChange = (event) => {
//     if (event.target.name === "search") {
//       const search = event.target.value.toLowerCase();
//       this.setState({
//         search: search,
//       });
//     }
//   };

//   sortFirstName = () => {
//     const firstEmp = this.state.results.sort((a, b) => {
//       if (b.name.first > a.name.first) {
//         return -1;
//       }
//       if (a.name.first > b.name.first) {
//         return 1;
//       }
//       return 0;
//     });
//     if (this.state.sortName === "DESC") {
//       firstEmp.reverse();
//       this.setState({ sortName: "ASC" });
//     } else {
//       this.setState({ sortName: "DESC" });
//     }
//     this.setState({ results: firstEmp });
//   };

//   sortLastName = () => {
//     const lastEmp = this.state.results.sort((a, b) => {
//       if (b.name.last > a.name.last) {
//         return -1;
//       }
//       if (a.name.last > b.name.last) {
//         return 1;
//       }
//       return 0;
//     });
//     if (this.state.sortName === "DESC") {
//       lastEmp.reverse();
//       this.setState({ sortName: "ASC" });
//     } else {
//       this.setState({ sortName: "DESC" });
//     }
//     this.setState({ results: lastEmp });
//   };

//   render() {
//     return (
//       <div>
//         <Search
//           search={this.state.search}
//           handleInputChange={this.handleInputChange}
//         />
//         <div className="container mt-3">
//           <table className="table table-striped text-center table-hover">
//             <thead>
//               <tr>
//                 <th scope="col">Image</th>
//                 <th scope="col">
//                   First Name{" "}
//                   <button
//                     type="button"
//                     id="sort-by-name"
//                     onClick={this.sortFirstName}
//                   >
//                     ^
//                   </button>
//                 </th>
//                 <th scope="col">
//                   Last Name{" "}
//                   <button
//                     type="button"
//                     id="sort-by-name"
//                     onClick={this.sortLastName}
//                   >
//                     ^
//                   </button>
//                 </th>
//                 <th scope="col">Phone</th>
//                 <th scope="col">Email</th>
//                 <th scope="col">DoB</th>
//               </tr>
//             </thead>
//             {this.state.results &&
//               this.state.results.map((query) =>
//                 query.name.first.toLowerCase().includes(this.state.search) ? (
//                   <tbody key={query.login.uuid}>
//                     <tr>
//                       <th scope="row">
//                         <img
//                           src={query.picture.thumbnail}
//                           alt={query.name.first}
//                         />
//                       </th>
//                       <td>{query.name.first}</td>
//                       <td>{query.name.last}</td>
//                       <td>{query.phone}</td>
//                       <td>{query.email}</td>
//                       <td>{query.dob.date}</td>
//                     </tr>
//                   </tbody>
//                 ) : query.name.last
//                     .toLowerCase()
//                     .includes(this.state.search) ? (
//                   <tbody key={query.login.uuid}>
//                     <tr>
//                       <th scope="row">
//                         <img
//                           src={query.picture.thumbnail}
//                           alt={query.name.first}
//                         />
//                       </th>
//                       <td>{query.name.first}</td>
//                       <td>{query.name.last}</td>
//                       <td>{query.phone}</td>
//                       <td>{query.email}</td>
//                       <td>{query.dob.date}</td>
//                     </tr>
//                   </tbody>
//                 ) : null
//               )}
//           </table>
//         </div>
//       </div>
//     );
//   }
// }

// export default Table;
