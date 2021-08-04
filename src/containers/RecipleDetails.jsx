import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { IconContext } from 'react-icons';
import { BsCheckCircle } from 'react-icons/bs';
import { connect } from 'react-redux';
import Header from '../components/Header';
import cooker from '../assets/img/cooker2.png';

function RecipleDetails(props) {
  const [reciple, setReciple] = useState({});
  const { allReciple, history, match } = props; // eslint-disable-line
  useEffect(() => {
    const foundid = match.params.id; // eslint-disable-line
    if (!foundid) return history.replace('/'); // eslint-disable-line
    const selectedReciple = allReciple.find((r) => r.idMeal === foundid);
    if (!selectedReciple) return history.replace('/'); // eslint-disable-line
    return setReciple(selectedReciple);
  }, []);

  const myIngredients = [];
  Object.keys(reciple).map((key) => (key.startsWith('strIngredient') && reciple[key] !== ''
    ? myIngredients.push(reciple[key])
    : ''));

  return (
    <div className="reciples-details-main-container">
      <Header image={cooker} title1={`${reciple.strMeal} 👨‍🍳 🍽️`} title2={`From: ${reciple.strArea}`} />
      <div className="reciple-details-content-wrapper d-flex flex-unit">
        <div className="reciple-image-details">
          <div className="reciple-image-wrapper">
            <img
              src={reciple.strMealThumb}
              alt="reciple"
            />
          </div>
          <div className="reciple-ingredients">
            <h1>Ingredients</h1>

            <ul className="ingredients-list">
              {myIngredients.map((ing) => (
                <li key={ing + Math.random}>
                  <IconContext.Provider value={{ className: 'reciple-details-icon' }}>
                    <BsCheckCircle />
                  </IconContext.Provider>
                  {ing}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="reciple-instructions-details">
          <h1>Instructions</h1>
          <p>
            {reciple.strInstructions}
          </p>
          <div className="imbeded-video-wrapper">
            <iframe
              src={`https://www.youtube.com/embed/${reciple.strYoutube && reciple.strYoutube.split('=')[1]}`}
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

RecipleDetails.propTypes = {
  allReciple: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

const mapStateToProps = (state) => ({
  allReciple: state.reciples.list,
});

export default connect(mapStateToProps)(RecipleDetails);
