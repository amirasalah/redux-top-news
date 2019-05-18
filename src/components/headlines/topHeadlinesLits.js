import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchHeadlines } from '../../actions/headlinesActions';

export class TopHeadlinesLits extends Component {
    componentDidMount() {
        this.props.fetchHeadlines(this.props.id)
    }
    render() {
        let articles;
        const { headlinesLoading } = this.props;
        if (headlinesLoading === false) {
            articles = this.props.headlines.articles;
            console.log(articles);
            return (
                <div>
                    {articles.map((el, index) =>
                        <div key={index}>
                            <strong>{el.title}</strong>
                            <small>By: {el.author}</small>
                            <p>{el.description}</p>
                            <small>{el.publishedAt}</small>
                            <img src={el.urlToImage}/>
                            <p>{el.content}</p>
                        </div>
                    )}
                </div>
            )
        }
        return (
            <div>...loading</div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        headlines: state.headlinesData.availableHeadlines,
        headlinesLoading: state.headlinesData.headlinesLoading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchHeadlines: id => dispatch(fetchHeadlines(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopHeadlinesLits)
