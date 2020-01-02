import React from 'react'; 
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';
import Logo from './Logo';

class App extends React.Component{
    state = {images : []}; 

    // onSearchSubmit = async (term) => {
    //     const response = await unsplash.get('/search/photos', {
    //         params: {query : term }
    //     }); 
    //     this.setState({images: response.data.results});
    // }

    async onSearchSubmit (term) {
        const response  = await unsplash.get('/search/photos', {
                    params: {query : term }
                }); 
                this.setState({images: response.data.results});
            }
    //this uses Axios to send a request to the Unsplash API -> 
    //returns a JSON back to the React project
 
    render () {
    return (
        <div>
            <div className="ui center aligned container">
                <Logo />
            </div>
            <div className="ui container" style={{marginTop: '20px'}}>
                <SearchBar onSubmission={(term)=>this.onSearchSubmit(term)}/>
                <ImageList images={this.state.images} />
            </div>
        </div>
        );
    }; 
}

export default App; 