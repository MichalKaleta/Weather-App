import React, {Component} from 'react'; 
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/index';

class SearchBar extends Component {

    constructor(props){
        super(props)
        this.state= {term: "kraków" };
        this.onFormSubmit("",this.state.term) ;
    }

    render(){
        return (
            <form onSubmit={  (ev)=>{this.onFormSubmit(ev,this.state.term) }  }>
                <label htmlFor ="citySearch"></label>
                <input 
                    id="citySearch" type="text"
                    onChange ={ (ev)=> this.onInputChange(ev.target.value) } />
                <button type="submit">Search</button>
            </form>
        )
    }

    onInputChange(term){
       this.setState({term})
    }

    onFormSubmit(ev,term){
       if(ev){
        ev.preventDefault();
       }
        this.props.fetchWeather(term)
    }
    
} 
 
function mapDispatchToProps(dispatch){
  return    bindActionCreators({fetchWeather},dispatch)
}
/////////////connnet( stateToPROPS, dispatchToSTATE )(container )
export default connect(null, mapDispatchToProps)(SearchBar);