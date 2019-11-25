import React,{Component} from 'react';
import Film from '../components/Film'
class FilmList extends Component {

  render() {
    const filmnode = this.props.data.map(
      film =>{ return (
        <Film name={film.name}key={film.id}>{film.url}</Film>
      );}
    )
    return (
      <div className="film-list">
      <h1> Upcomming Film Releases for UK</h1>
       {filmnode}
      </div>
    )
  }
}

export default FilmList;
