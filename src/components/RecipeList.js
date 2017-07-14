import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import RecipeItem from './RecipeItem';
import { favoriteRecipe, unfavoriteRecipe } from '../actions';

class RecipeList extends Component{

    constructor(props) {
        super(props);
        this.isFavorited = this.isFavorited.bind(this);
        this.favorite = this.favorite.bind(this);
    }

    favorite(recipe, remove) {
        if (remove) {
            this.props.unfavoriteRecipe(recipe);
        }
        else {
            this.props.favoriteRecipe(recipe);
        }
    }

    isFavorited(recipe) {
        return this.props.favoriteRecipes.filter(item => item.href === recipe.href).length>0;
    }
    render() {
        return(
            <div>
                {
                    this.props.favoriteRecipes.length > 0 ?
                        <h4 className="link"><Link to='/favorites'>Favorites</Link></h4>
                        : <div></div>

                }
                {
                    this.props.recipes.map((recipe, index) => {
                        return (
                            <RecipeItem key={index} recipe={recipe} favorite={this.favorite} isFavorited={this.isFavorited} favorited={this.isFavorited(recipe)} />
                        )
                    })
                }
            </div>
        );
    }
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps, { favoriteRecipe, unfavoriteRecipe })(RecipeList);