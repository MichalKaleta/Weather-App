import React, {Component} from 'react'; 
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/index';

class SearchBar extends Component {

    constructor(props){
        super(props)
        this.state= {};
    }
    onInputChange(term){
      this.setState({term})
    }

    onFormSubmit(ev,term){
       ev.preventDefault();
       this.props.fetchWeather(term)
    }
   
    render(){
        return (
            <form onSubmit={  (ev)=>{this.onFormSubmit(ev,this.state.term) }  }>
                <label htmlFor ="citySearch"></label>
                <input 
                    id="citySearch" type="text" placeholder="enter city"
                    onChange ={ (ev)=> this.onInputChange(ev.target.value) } />
                <button type="submit" className="btn btn-success">Search</button>
            </form>
        )
    }
} 
 
function mapDispatchToProps(dispatch){
  return    bindActionCreators({fetchWeather},dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBar);