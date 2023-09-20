import Col from 'react-bootstrap/esm/Col'
import { Link } from 'react-router-dom'
import { UserContext } from '../App.js'
import { useContext } from 'react'

// ICON
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faStar, faHeart } from '@fortawesome/free-regular-svg-icons'
import { faFire } from '@fortawesome/free-solid-svg-icons'

export default function RecipeCard({ recipe }) {
  const linkUrl = `/recipes/${recipe._id}`
  const { user, setUser } = useContext(UserContext)

  return (
    <Col
      lg='3'
      md='4'
      sm='6'
      className="recipes-flex favorites-icon-container"
    >
      {user &&
        <span className='favorites-icon'>
          <FontAwesomeIcon icon={faHeart} size="2xl" style={{ color: '#ff5f40' }} />
        </span>
      }
      <img src={recipe.image} />
      <div className='recipe-colum'>
        <span className="star-rating">
          {/* {Array(recipe.rating).fill(true).map((_, i) => <FontAwesomeIcon icon={faStar} size="xs" style={{ color: '#fff' }} key={i} />)} */}
          <p>{recipe.avgRating}<FontAwesomeIcon icon={faStar} size="xs" style={{ color: '#212529' }} className='ps-1' /></p>
        </span>
        <p className="diet-button">{recipe.diet}</p>
        <p className="category">{recipe.category}</p>
        <div className='same-colum-height'>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
          <FontAwesomeIcon icon={faFire} style={{ color: '#ff5f40' }} />
          <p className="p-next-icon-first">{recipe.difficulty}</p>
          <FontAwesomeIcon icon={faClock} style={{ color: '#FF5F40' }} />
          <p className="p-next-icon-second">{recipe.time} min</p>
        </div>
        <div className='container-recipe-buttons mt-3'>
          <Link to={linkUrl} className="red-button">SEE RECIPE</Link>
        </div>
      </div>
    </Col>
  )

}
