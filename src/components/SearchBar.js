import React from 'react'; 

class SearchBar extends React.Component{
    onInputChanges (event) {
        this.setState({term : event.target.value}); 
        // console.log(event.target.value); 
        // console.log(event);
        console.log(this.state.term);
    }

    onInputSubmit = (event) => {
        event.preventDefault();
        console.log("Submit event handler called.");
        console.log(this.state.term);

        this.props.onSubmission(this.state.term); 
    }

    constructor(props) {
        super(props); 
        this.state = {term: ''}; 
        // this.onInputSubmit = this.onInputSubmit.bind(this); 
        // this.onInputChanges = this.onInputChanges.bind(this);
    }

    render() {
        return (
        <div className ="ui segment">
            <form className = "ui form" onSubmit={this.onInputSubmit}>
                <div> 
                    <label>Image Search</label>
                    <input type="text" value={this.state.term} onChange={(e) => {this.onInputChanges(e)}} placeholder="Search for images here..."/>
                </div>
            </form>
        </div>)
    }
} 

export default SearchBar; 