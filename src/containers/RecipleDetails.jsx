import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { IconContext } from 'react-icons';
import { BsCheckCircle } from 'react-icons/bs';
import { connect } from 'react-redux';
import Header from '../components/Header';
import cooker from '../assets/img/cooker2.png';

function RecipeDetails(props) {
  const [recipe, setRecipe] = useState({});
  const { allRecipes, history, match } = props;
  const { id } = match.params;
  useEffect(() => {
    const foundid = id;
    if (!foundid) return history.replace('/');
    const selectedRecipe = allRecipes.find((r) => r.idMeal === foundid);
    if (!selectedRecipe) return history.replace('/');
    return setRecipe(selectedRecipe);
  }, []);

  const myIngredients = [];
  Object.keys(recipe).map((key, index) => (key.startsWith('strIngredient') && recipe[key] !== ''
    ? myIngredients.push({ name: recipe[key], id: index })
    : ''));

  return (
    <div className="recipes-details-main-container">
      <Header image={cooker} title1={`${recipe.strMeal} 👨‍🍳 🍽️`} title2={`From: ${recipe.strArea}`} />
      <div className="recipe-details-content-wrapper d-flex flex-unit">
        <div className="recipe-image-details">
          <div className="recipe-image-wrapper">
            <img
              src={recipe.strMealThumb}
              alt="recipe"
            />
          </div>
          <div className="recipe-ingredients">
            <h1>Ingredients</h1>

            <ul className="ingredients-list">
              {myIngredients.map((ing) => (
                <li key={ing.id}>
                  <IconContext.Provider value={{ className: 'recipe-details-icon' }}>
                    <BsCheckCircle />
                  </IconContext.Provider>
                  {ing.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="recipe-instructions-details">
          <h1>Instructions</h1>
          <p>
            {recipe.strInstructions}
          </p>
          <div className="imbeded-video-wrapper">
            <iframe
              src={`https://www.youtube.com/embed/${recipe.strYoutube && recipe.strYoutube.split('=')[1]}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </div>
  );
}

RecipeDetails.defaultProps = {
  history: {},
  match: {
    params: { id: '11' },
  },
};

RecipeDetails.propTypes = {
  allRecipes: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  history: PropTypes.objectOf(PropTypes.any),
  match: PropTypes.objectOf(PropTypes.any),
};

const mapStateToProps = (state) => ({
  allRecipes: state.recipes.list,
});

export default connect(mapStateToProps)(RecipeDetails);
