import React, { useEffect } from 'react';
import { IconContext } from 'react-icons';
import { BsCheckCircle } from 'react-icons/bs';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { HashLoader } from 'react-spinners';
import Header from '../components/Header';
import cooker from '../assets/img/cooker2.png';
import { loadDetailsAsync } from '../store/actions/index';

function RecipeDetails() {
  const params = useParams();
  const { id } = params;
  const navigate = useNavigate();

  const { details: recipe, loading, error } = useSelector((state) => state.recipeDetails);
  const dispatch = useDispatch();

  useEffect(() => {
    // setCurrentUser(username);
    dispatch(loadDetailsAsync(id, navigate));
    // const foundid = id;
    // // if (!foundid) return navigate('/recipes');
  }, []);

  const myIngredients = [];
  Object.keys(recipe).map((key, index) => (key.startsWith('strIngredient') && recipe[key] !== ''
    ? myIngredients.push({ name: recipe[key], id: index })
    : ''));

  return (
    (error || !recipe) ? (
      <div className="d-flex flex-center list-empty-message">
        😥
        {error || 'Sorry this recipes does not content any information.' }
      </div>
    ) : (
      <div className="recipes-details-main-container">
        { loading && (
        <div className="loading-spinner-wrapper d-flex flex-center">
          <HashLoader color="#e0aea6" loading={loading} size={70} />
        </div>
        )}
        {!loading && (
        <>
          <Header image={cooker} title1={`${recipe.strMeal} 👨‍🍳 🍽️`} title2={`From: ${recipe.strArea}`} icon="🚀 " message="Welcome back here " />
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
        </>
        )}
      </div>
    )
  );
}

export default RecipeDetails;
