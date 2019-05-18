import TopHeadlinesLits from './topHeadlinesLits';
import React from 'react'

const TopHeadlinesContainer = props => <TopHeadlinesLits id={props.match.params.id}></TopHeadlinesLits>

export default TopHeadlinesContainer;
