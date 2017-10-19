import React from 'react';
import Header from '../components/Header';
let key = 0;

class Search extends React.Component {
  state = {
    search: "",
    repos: []
  };

  searchGithub = () => {
    fetch("https://api.github.com/search/repositories?q=" + this.state.search)
      .then(resp => resp.json())
      .then(respJson => {
        let repos = respJson.items.map(item => <li key={key++}>{item.git_url}</li>)
        this.setState({repos: repos});
      });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.searchGithub();
  };

  render() {
    return (
      <div className="container">
        <Header title="Search" />
        <hr />
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="search"
            value={this.state.search}
            onChange={search => {
              this.setState({ search: search.target.value });
            }}
          />
          <input type="submit" value="submit" />
        </form>
        <ul>
          {this.state.repos}
        </ul>
      </div>
    );
  }
}

export default Search;
