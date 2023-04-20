import {NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className=' navbar'>
        <nav>
          <div className="logo">
              <h2>Alchimetis Technologies</h2>
          </div>

          <ul className="menu">
              <li><NavLink to='/'>Students</NavLink></li>
              <li><NavLink to='/register' >New Student</NavLink></li>
          </ul>
        </nav>
    </div>
  )
}
export default Navbar