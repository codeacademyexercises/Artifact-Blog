import {
    clap,
    like,
} from '../actions/actions';
import { connect } from 'react-redux';
import BlogReactions from '../Components/BlogReactions/BlogReactions';

const mapStatetoProps = (state, ownProps)=>{
    return {
        claps: state.BlogPostArray[ownProps.index].claps,
        like: state.BlogPostArray[ownProps.index].like,
    }
}

const mapDispatchtoProps = (dispatch, ownProps)=>{
    return {
        clapsUpdate: () => dispatch(clap(ownProps.index)),
        likeToggle: () => dispatch(like(ownProps.index)),
    }
}

export default connect(
    mapStatetoProps,
    mapDispatchtoProps,
)(BlogReactions);