import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import RecipeItem from './RecipeItem';
import { favoriteRecipe, unfavoriteRecipe } from '../actions';

class FavoriteRecipeList extends Component {

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
        return (
            <div>
                <h4 className="link"><Link to='/'>Home</Link></h4>
                <h1>
                    Favorite Recipies
                </h1>
                {
                    this.props.favoriteRecipes.map((recipe, index) => {
                        return (
                            <RecipeItem key={index} recipe={recipe} favorite={this.favorite} isFavorited={this.isFavorited} favorited={true} />
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

export default connect(mapStateToProps, { favoriteRecipe, unfavoriteRecipe })(FavoriteRecipeList);