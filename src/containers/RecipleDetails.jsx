import React from 'react';
import { IconContext } from 'react-icons';
import { BsCheckCircle } from 'react-icons/bs';
import Header from '../components/Header';
import cooker from '../assets/img/cooker2.png';

export default function RecipleDetails() {
  const ingredients = {
    idMeal: '52785',
    strMeal: 'Dal fry',
    strDrinkAlternate: null,
    strCategory: 'Vegetarian',
    strArea: 'Indian',
    strInstructions:
      'Wash and soak toor dal in approx. 3 cups of water, for at least one hours. Dal will be double in volume after soaking. Drain the water. Cook dal with 2-1/2 cups water and add salt, turmeric, on medium high heat, until soft in texture (approximately 30 mins) it should be like thick soup. In a frying pan, heat the ghee. Add cumin seeds, and mustard seeds. After the seeds crack, add bay leaves, green chili, ginger and chili powder. Stir for a few seconds. Add tomatoes, salt and sugar stir and cook until tomatoes are tender and mushy. Add cilantro and garam masala cook for about one minute. Pour the seasoning over dal mix it well and cook for another minute. Serve with Naan.',
    strMealThumb:
      'https://www.themealdb.com/images/media/meals/wuxrtu1483564410.jpg',
    strTags: 'Curry,Vegetarian,Cake',
    strYoutube: 'https://www.youtube.com/watch?v=J4D855Q9-jg',
    strIngredient1: 'Toor dal',
    strIngredient2: 'Water',
    strIngredient3: 'Salt',
    strIngredient4: 'Turmeric',
    strIngredient5: 'Ghee',
    strIngredient6: 'Chopped tomatoes',
    strIngredient7: 'Cumin seeds',
    strIngredient8: 'Mustard Seeds',
    strIngredient9: 'Bay Leaf',
    strIngredient10: 'Green Chili',
    strIngredient11: 'Ginger',
    strIngredient12: 'Cilantro',
    strIngredient13: 'Red Pepper',
    strIngredient14: 'Salt',
    strIngredient15: 'Sugar',
    strIngredient16: 'Garam Masala',
    strIngredient17: '',
    strIngredient18: '',
    strIngredient19: '',
    strIngredient20: '',
    strMeasure1: '1 cup',
    strMeasure2: '2-1/2 cups',
    strMeasure3: '1 tsp',
    strMeasure4: '1/4 tsp',
    strMeasure5: '3 tbs',
    strMeasure6: '1 cup',
    strMeasure7: '1/2 tsp',
    strMeasure8: '1/2 tsp',
    strMeasure9: '2',
    strMeasure10: '1 tbs chopped',
    strMeasure11: '2 tsp shredded',
    strMeasure12: '2 tbs ',
    strMeasure13: '1/2 tsp',
    strMeasure14: '1/2 tsp',
    strMeasure15: '1 tsp',
    strMeasure16: '1/4 tsp',
    strMeasure17: '',
    strMeasure18: '',
    strMeasure19: '',
    strMeasure20: '',
    strSource: 'https://www.instagram.com/p/BO21bpYD3Fu',
    strImageSource: null,
    strCreativeCommonsConfirmed: null,
    dateModified: null,
  };
  const myIngredients = [];
  Object.keys(ingredients).map((key) => (key.startsWith('strIngredient') && ingredients[key] !== ''
    ? myIngredients.push(ingredients[key])
    : ''));
  return (
    <div className="reciples-details-main-container">
      <Header image={cooker} title1="Poutine 👨‍🍳 🍽️" title2="From: Canadian" />
      <div className="reciple-details-content-wrapper d-flex flex-unit">
        <div className="reciple-image-details">
          <div className="reciple-image-wrapper">
            <img
              src="https://www.themealdb.com/images/media/meals/wuxrtu1483564410.jpg"
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
            Heat oil in a deep fryer or deep heavy skillet to 365°F (185°C).
            Warm gravy in saucepan or microwave. Place the fries into the hot
            oil, and cook until light brown, about 5 minutes. Remove to a paper
            towel lined plate to drain. Place the fries on a serving platter,
            and sprinkle the cheese over them. Ladle gravy over the fries and
            cheese, and serve immediately.
          </p>
          <div className="imbeded-video-wrapper">
            <iframe
              src="https://www.youtube.com/embed/UVAMAoA2_WU"
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
