import React, { Component } from 'react';

const MovieReview = ({headline, byline, link, summary_short}) => {
    return ( 
        <div key={headline} className="review">
            <h3> <a href={link.url}>{headline}</a> </h3>
            <h4> { byline } </h4>
            <h5> { summary_short }</h5>
        </div>
    )
}

const MovieReviews = ({reviews}) => { 
        return (
            <div className="review-list">
                {reviews.map(MovieReview)}
            </div>
        );
    }

MovieReviews.defaultProps = {
    reviews: []
}
export default MovieReviews;
