import { Link } from 'react-router-dom'
import '../assets/css/404.css'
import astronaut from '../assets/images/astronaut.png'

const Error404 = () => {
  return (
    <>
      <div className="div404">
        <div className="stars">
          <div className="central-body">
            <img
              alt="astronaut"
              className="object_astronaut"
              src={astronaut}
              width="240px"
              style={{ marginBottom: '100px' }}
            />
            <Link to="/" className="btn-go-home" target="_blank">
              GO BACK HOME
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Error404

