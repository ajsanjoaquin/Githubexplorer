import React,{Component} from 'react';
import SearchFilters from './SearchFilters';

class Header extends Component {
    constructor (props){
        super(props);
        this.state={
            visible:false,
        };
    }
    /**for toggling visibility */
    toggleVisibility=()=>{
        const visible=!this.state.visible;
        this.setState({
            visible,
        });
    }
    render(){
        return(
            <nav className={`navbar ${this.state.visible ? 'active':''}`}>
                <div className='title'>Github Explorer</div>
                <div className='btn toggle-btn'onClick={this.toggleVisibility}> 
                    Toggle Filters
                </div>
                {/*SearchFilters takes props from the App component*/}
                <SearchFilters {...this.props} visible ={this.state.visible}/>
            </nav>
        );
    }
}

export default Header;