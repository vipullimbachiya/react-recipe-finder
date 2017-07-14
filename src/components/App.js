import React, { Component } from 'react';
import SearchRecipies from './SearchRecipies';
import RecipeList from './RecipeList';
import '../styles/index.css';

class App extends Component {
    render() {
        return (
            <div>
                <h1>Recipe Finder</h1>
                <SearchRecipies />
                <RecipeList />
            </div>
        );
    }
}

export default App;