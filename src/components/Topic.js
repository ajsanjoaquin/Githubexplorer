import React,{Component} from 'react';
import PropTypes from 'prop-types';

class Topic extends Component {
    handleClick=()=>{
        this.props.toggleTopic(this.props.children);
    }
    render(){
        return(
            <div className={`topic${this.props.active ? 'active':''}`}
            onClick={this.handleClick}>
                #{this.props.children}
            </div>
        );
    }
}
/*adds click handler to toggle topics under currentTopics */
Topic.propTypes={
    children:PropTypes.string,
    active:PropTypes.bool,
    toggleTopic:PropTypes.func,
};

export default Topic;