import { NavLink } from 'react-router-dom';
import '../styles/Nav.css';

function Nav() {
  return (
    <nav className="primaryNav">
      NAV
      <ul>
        <li>
          <NavLink to="/doubly-linked-list">
            Doubly Linked List
          </NavLink>
        </li>
      </ul>

    </nav>
  )
}

export default Nav