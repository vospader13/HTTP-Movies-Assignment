import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import {CardShell} from './Styles';
export default class SavedList extends Component {
  constructor(props) {
    super(props);
  }



  render() {
    return (
      <CardShell>
        <h3>Saved Movies:</h3>
        {this.props.list.map(movie => {
          return (
            <NavLink
              to={`/movies/${movie.id}`}
              key={movie.id}
              activeClassName="saved-active"
            >
              <span className="saved-movie">{movie.title}</span>
            </NavLink>
          );
        })}
        <div className="home-button">
          <Link to="/">Home</Link>
        </div>
          <button className="home-button">
              <Link to="/add-movie">Add Movie</Link>
          </button>
      </CardShell>
    );
  }
}
