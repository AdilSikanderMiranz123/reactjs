import React, { Component } from "react";

class Movies extends Component {
  state = {
    movies: [
      {
        _id: 1,
        name: "Raone",
        publish_at: "01-01-2018"
      },

      {
        _id: 2,
        name: "DevDas",
        publish_at: "01-02-2018"
      },

      {
        _id: 3,
        name: "Beautiful Mind",
        publish_at: "01-03-2018"
      },
      {
        _id: 4,
        name: "Hulk Brothers",
        publish_at: "01-04-2018"
      }
    ]
  };
  handleDelete = id => {
    const updatedMovies = this.state.movies.filter(movie => movie._id != id);

    this.setState({
      movies: updatedMovies
    });
  };
  render() {
    if (this.state.movies.length === 0) {
      return <p>There is no Movie in your database</p>;
    }

    return (
      <React.Fragment>
        <p>Showing {this.state.movies.length} movies in your database.</p>

        <table className="table">
          <thead>
            <th scope="col">ID</th>
            <th scope="col">Movie Name</th>
            <th scope="col">Publish Date</th>
          </thead>
          {this.state.movies.map(movie => (
            <tr scope="row" className="m-2" key={movie._id}>
              <td>{movie._id}</td>

              <td>{movie.name}</td>

              <td>{movie.publish_at}</td>
              <td
                onClick={() => this.handleDelete(movie._id)}
                className="badge badge-danger"
              >
                Delete
              </td>
            </tr>
          ))}
        </table>
      </React.Fragment>
    );
  }
}

export default Movies;
