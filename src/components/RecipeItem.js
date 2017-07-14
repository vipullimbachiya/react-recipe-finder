import React, { Component } from 'react';

class RecipeItem extends Component{
    render() {
        let { recipe } = this.props;
        return (
            <div className="recipe-item">
                {
                    this.props.isFavorited(recipe) ?
                        <div className="star" onClick={() => this.props.favorite(recipe, true)}>
                            &#9733;
                        </div> :
                        <div className="star" onClick={() => this.props.favorite(recipe)}>
                            &#9734;
                        </div>
                }
                <div className="recipe-text">
                    <a href={recipe.href}>
                        <h4>{recipe.title}</h4>
                    </a>
                    <p>
                        {recipe.ingredients}
                    </p>
                </div>
                <img className="recipe-img" src={recipe.thumbnail} alt={recipe.title} />
            </div>
        );
    }
}

export default RecipeItem;