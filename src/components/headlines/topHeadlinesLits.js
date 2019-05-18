import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchHeadlines } from '../../actions/headlinesActions';
import { HeadlinesWrapper , HeadlinesItem , HeadlinesImage } from "./headlines.styles";

export class TopHeadlinesLits extends Component {
    componentDidMount() {
        this.props.fetchHeadlines(this.props.id)
    }
    render() {
        let articles;
        const { headlinesLoading } = this.props;
        if (headlinesLoading === false) {
            articles = this.props.headlines.articles;
            return (
                <HeadlinesWrapper>
                    {articles.map((el, index) =>
                        <HeadlinesItem key={index}>
                            <strong>{el.title}</strong>
                            <small>By: {el.author}</small>
                            <p>{el.description}</p>
                            <small>{el.publishedAt}</small>
                            <HeadlinesImage alt={el.title} src={el.urlToImage} />
                            <p>{el.content}</p>
                        </HeadlinesItem>
                    )}
                </HeadlinesWrapper>
            )
        }
        return (
            <div>...loading</div>
        )
    }
}

const mapStateToProps = state => ({
    headlines: state.headlinesData.availableHeadlines,
    headlinesLoading: state.headlinesData.headlinesLoading
})

const mapDispatchToProps = dispatch => ({
    fetchHeadlines: id => dispatch(fetchHeadlines(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(TopHeadlinesLits)
