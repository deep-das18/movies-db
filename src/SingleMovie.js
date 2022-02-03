import React from "react";
import { useParams, Link } from "react-router-dom";
import useFetch from "./useFetch";
const url =
  "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png";
const SingleMovie = () => {
  const { id } = useParams();
  const { isLoading, error, data: movie } = useFetch(`&i=${id}`);
  if (isLoading) {
    return <div className="loading"></div>;
  }
  if (error.show) {
    return (
      <div className="page-error">
        <h1>{error.msg}</h1>
        <Link to="/" className="btn">
          back to movies
        </Link>
      </div>
    );
  }
  const {
    Poster: poster,
    Title: title,
    Plot: plot,
    Actors: actors,
    Country: country,
    Director: director,
    Genre: genre,
    Released: released,
    Runtime: runtime,
    Writer: writer,
    Awards: awards,
    Ratings: ratings,
    BoxOffice: collection,
  } = movie;
  return (
    <section className="single-movie">
      <img src={poster === "N/A" ? url : poster} alt={title} />
      <div className="single-movie-info">
        <h2>{title}</h2>
        <p>
          <span className="label">Genre: </span>
          {genre}
        </p>
        <p>
          {" "}
          <span className="label">Plot:</span> {plot}
        </p>
        <p>
          <span className="label">Director(s): </span>
          {director}
        </p>
        <p>
          <span className="label">Writer(s): </span>
          {writer}
        </p>
        <p>
          <span className="label">Cast: </span>
          {actors}
        </p>
        {awards === "N/A" ? null : (
          <p>
            <span className="label">Awards: </span>
            {awards}
          </p>
        )}
        {ratings.length > 0 ? <p className="label">Rating(s):</p> : null}
        {ratings.map((rating, index) => {
          return (
            <p key={index} className="rating">
              <b>{rating.Source}:</b> {rating.Value}
            </p>
          );
        })}
        {collection === "N/A" ? null : (
          <p>
            <span className="label">Box office: </span>
            {collection}
          </p>
        )}
        <p>
          <span className="label">Runtime: </span>
          {runtime}
        </p>
        <p>
          <span className="label">Release date: </span>
          {released}
        </p>
        <p>
          <span className="label">Country: </span>
          {country}
        </p>
        <Link className="btn" to="/">
          back to movies
        </Link>
      </div>
    </section>
  );
};

export default SingleMovie;
