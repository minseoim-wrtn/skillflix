import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { FiSearch, FiPlusCircle, FiUser, FiLogOut, FiAward } from 'react-icons/fi';

export default function Navbar() {
  const { user, profile, signOut } = useAuth();
  const location = useLocation();

  const isActive = (path) => location.pathname === path ? 'nav-link active' : 'nav-link';

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="navbar-logo">SKILLFLIX</Link>
        <nav className="navbar-links">
          <Link to="/" className={isActive('/')}>Home</Link>
          <Link to="/search" className={isActive('/search')}>
            <FiSearch /> Search
          </Link>
          <Link to="/teams" className={isActive('/teams')}>
            <FiAward /> Teams
          </Link>
          {user && (
            <Link to="/create" className={isActive('/create')}>
              <FiPlusCircle /> Create
            </Link>
          )}
        </nav>
        <div className="navbar-auth">
          {user ? (
            <div className="navbar-user">
              <Link to="/profile" className="navbar-profile">
                <FiUser /> {profile?.display_name || 'Profile'}
              </Link>
              <button onClick={signOut} className="navbar-signout" title="Sign Out">
                <FiLogOut />
              </button>
            </div>
          ) : (
            <Link to="/auth" className="navbar-signin-btn">Sign In</Link>
          )}
        </div>
      </div>
    </header>
  );
}
