import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const SEARCH_URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}&query=`;

            class SearchableMovieReviewsContainer extends Component {
                constructor() {
                    super()
                    this.state = {
                        reviews: [],
                        searchTerm: ""
                    }
                }

                handleSearchInput = e => {
                    this.setState({ searchTerm: e.target.value })
                }
                
                handleSubmit = e => {
                    e.preventDefault()

                    fetch(SEARCH_URL + this.state.searchTerm)
                    .then(resp => resp.json())
                    .then(response => this.setState({ reviews: response.results }))
                }
                render() {
                    return(
                        <div className="searchable-movie-reviews">
                            <form onSubmit={this.handleSubmit}>
                                <input type="text" onChange={this.handleSearchInput}/>
                                <button type="submit">Submit</button>
                            </form>
                            
                            <MovieReviews reviews={this.state.reviews} />
                        </div>
                    )
                }
            }
            
            export default SearchableMovieReviewsContainer;
