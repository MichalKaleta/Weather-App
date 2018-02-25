import React, {Component} from 'react'; 
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/index';

class SearchBar extends Component {
  componentDidMount(){

    document.getElementById('search-city').focus()
   
  }
    constructor(props){
        super(props)
        this.state= {};
    }
    onInputChange(term){
      this.setState({term})
    }

    onFormSubmit(ev,term){
       ev.preventDefault();
      document.getElementById('search-city').value =""
       this.props.fetchWeather(term)
    }
   
    render(){
        return (
         <div>
          <h1 className='page-header'> Current Weather</h1>
            <form className="form-inline" onSubmit={  (ev)=>{this.onFormSubmit(ev,this.state.term) }  }>  
            
              <div className="form-group">
                <input id="search-city" className='form-control rounded-0'  type="text" placeholder="enter city"
                       onChange ={ (ev)=> this.onInputChange(ev.target.value) }
                 />
                <button type="submit" className="btn btn-success rounded-0">Search</button>
              </div>              
            </form>
          </div>
        
        )
    }
} 
 
function mapDispatchToProps(dispatch){
  return    bindActionCreators({fetchWeather},dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBar);