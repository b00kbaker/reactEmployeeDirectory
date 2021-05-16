import React, { Component } from "react";
import Search from "../../pages/search";
import Navbar from "../Navbar/index";
import "../../pages/styles.css";
import API from "../../utils/API";

class Container extends Component {
  state = {
    search: "",
    results: [],
    sort: "DESC",
  };

  componentDidMount() {
    this.searchEmployees("");
  }

  searchEmployees = (query) => {
    API.search(query)
      .then((res) => this.setState({ results: res.data.results }))
      .catch((err) => console.log(err));
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.searchEmployees(this.state.search);
  };

  handleInputChange = (event) => {
    let filterResults = this.state.results.filter((each) => {
      return (
        each.name.first
          .toLowerCase()
          .includes(event.target.value.toLowerCase()) ||
        each.name.last
          .toLowerCase()
          .includes(event.target.value.toLowerCase()) ||
        each.phone.includes(event.target.value) ||
        each.email.toLowerCase().includes(event.target.value.toLowerCase())
      );
    });
    this.setState({ search: event.target.value, results: filterResults });
  };

  sortByName = () => {
    let alphabetizedResults = this.state.results.sort((a, b) => {
      return a.name.first > b.name.first ? 1 : -1;
    });
    this.state.sort === "DESC"
      ? alphabetizedResults.reverse() && this.setState({ sort: "ASC" })
      : this.setState({ sort: "DESC" });
    this.setState({ results: alphabetizedResults });
  };

  sortByEmail = () => {
    let emailResults = this.state.results.sort((a, b) => {
      return a.email > b.email ? 1 : -1;
    });
    this.state.sort === "DESC"
      ? emailResults.reverse() && this.setState({ sort: "ASC" })
      : this.setState({ sort: "DESC" });
    this.setState({ results: emailResults });
  };

  sortByPhone = () => {
    let phoneResults = this.state.results.sort((a, b) => {
      return parseInt(a.phone.trim().replace(/-()/), "") -
        parseInt(b.phone.trim().replace(/-()/), "")
        ? 1
        : -1;
    });
    this.setState({ results: phoneResults });
  };

  sortByDOB = () => {
    let DOBResults = this.state.results.sort((a, b) => {
      return a.dob > b.dob ? 1 : -1;
    });
    this.setState({ results: DOBResults });
  };

  render() {
    return (
      <div>
        <Search
          search={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        <Navbar
          search={this.state.search}
          results={this.state.results}
          sortByName={this.sortByName}
          sortByEmail={this.sortByEmail}
          sortByPhone={this.sortByPhone}
          sortByDOB={this.sortByDOB}
        />
      </div>
    );
  }
}

export default Container;


