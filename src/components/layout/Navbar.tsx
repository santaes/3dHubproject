import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingCart, User, Package, Upload } from 'lucide-react';
import LoginButton from '../auth/LoginButton';
import { useAuth } from '../auth/AuthContext';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const { isAuthenticated, user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  // Ref for avatar and dropdown
  const avatarRef = React.useRef<HTMLDivElement>(null);
  const dropdownRef = React.useRef<HTMLDivElement>(null);

  // Helper for avatar fallback
  const [avatarError, setAvatarError] = useState(false);
  // Debug avatar logic
 // console.log('[Navbar] user.picture:', user?.picture);
 // console.log('[Navbar] avatarError:', avatarError);
  // Always use user.picture if present and not errored, fallback to default
  const avatarSrc = !avatarError && user?.picture
    ? user.picture
    : '/default-avatar.png';
  //console.log('[Navbar] avatarSrc:', avatarSrc);

  // Dropdown close on logout
  const handleLogout = () => {
  //  console.log('[Navbar] Logout clicked', { user });
    setIsProfileOpen(false);
    logout();
  };

  // Debug logs
 // console.log('[Navbar] isAuthenticated:', isAuthenticated);
 // console.log('[Navbar] user:', user);

  // Profile dropdown: close on outside click
  React.useEffect(() => {
    if (!isProfileOpen) return;
    function handleClick(e: MouseEvent) {
      if (
        avatarRef.current && !avatarRef.current.contains(e.target as Node) &&
        dropdownRef.current && !dropdownRef.current.contains(e.target as Node)
      ) {
      //  console.log('[Navbar] Outside click, closing dropdown');
        setIsProfileOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [isProfileOpen]);
  
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <Package className="h-8 w-8 text-primary-600" />
            <span className="ml-2 text-xl font-bold text-primary-800">3DHub</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/explore" className="text-neutral-700 hover:text-primary-600 transition-colors">
              Explore
            </Link>
            <Link to="/designers" className="text-neutral-700 hover:text-primary-600 transition-colors">
              Designers
            </Link>
            <Link to="/brands" className="text-neutral-700 hover:text-primary-600 transition-colors">
              Brands
            </Link>
            {isAuthenticated && (
              <Link to="/upload" className="text-neutral-700 hover:text-primary-600 transition-colors">
                Upload
              </Link>
            )}
            <div className="flex items-center space-x-4">
              <Link to="/cart" className="text-neutral-700 hover:text-primary-600 transition-colors">
                <ShoppingCart className="h-6 w-6" />
              </Link>
              
              {isAuthenticated && user ? (
  <div className="flex items-center relative">
    {/* Avatar as dropdown trigger */}
    <div
      className="flex items-center cursor-pointer select-none"
      tabIndex={0}
      ref={avatarRef}
      onClick={() => {
      //  console.log('[Navbar] Avatar clicked');
        setIsProfileOpen((v) => {
          const newState = !v;
      //    console.log('[Navbar] setIsProfileOpen', newState);
          return newState;
        });
      }}
    >
      <img
        src={avatarSrc}
        alt={user.name || 'User'}
        onError={() => {
          console.log('[Navbar] Avatar image failed to load:', avatarSrc);
          setAvatarError(true);
        }}
        className="h-8 w-8 rounded-full object-cover border border-neutral-200"
      />
      {avatarError && (
        <span className="ml-2 text-xs text-red-500">Image failed to load</span>
      )}
    </div>
    {/* Profile dropdown (desktop only) */}
    {isProfileOpen && (
      <div
        ref={dropdownRef}
        className="absolute right-0 top-12 w-64 md:block bg-white border border-neutral-200 rounded-lg shadow-lg z-50"
        tabIndex={-1}
      >
        <div className="p-4">
          <div className="flex flex-col items-center pb-2 border-b border-neutral-100">
            <img
              src={user.picture || '/default-avatar.png'}
              alt={user.name || 'User'}
              className="h-14 w-14 rounded-full object-cover border border-neutral-300 mb-2"
            />
            <div className="font-semibold text-base">{user.name || 'No Name'}</div>
            <div className="text-xs text-neutral-600 mb-1">{user.email || 'No Email'}</div>
          </div>
          <div className="mt-2">
            <button
              className="block w-full text-sm text-primary-600 hover:underline mb-2 text-center bg-transparent border-0 p-0 cursor-pointer"
              onClick={() => {
  //console.log('[Navbar] View Profile clicked', { user });
  setIsProfileOpen(false);
  if (user?.sub) {
    //console.log('[Navbar] Navigating to', `/profile/${user.sub}`);
    navigate(`/profile/${user.sub}`);
  } else {
    //console.log('[Navbar] Navigating to /profile');
    navigate('/profile');
  }
}}
            >
              View Profile
            </button>
            <div className="flex justify-center">
              <button
                onClick={handleLogout}
                    className="inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 bg-transparent hover:bg-neutral-100 active:bg-neutral-200 h-10 px-4 flex items-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-log-out" aria-hidden="true"><path d="m16 17 5-5-5-5"></path><path d="M21 12H9"></path><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path></svg>
                <span>Log Out</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    )}
  </div>
) : (
  <LoginButton />
)}
            </div>
          </nav>

          <button 
            className="md:hidden text-neutral-700 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-4 py-4 border-t border-neutral-200">
              <nav className="flex flex-col space-y-4">
                <Link to="/explore" className="flex items-center text-neutral-700 hover:text-primary-600 transition-colors">
                  <span>Explore</span>
                </Link>
                <Link to="/designers" className="flex items-center text-neutral-700 hover:text-primary-600 transition-colors">
                  <span>Designers</span>
                </Link>
                <Link to="/brands" className="flex items-center text-neutral-700 hover:text-primary-600 transition-colors">
                  <span>Brands</span>
                </Link>
                {isAuthenticated && (
                  <Link to="/upload" className="flex items-center text-neutral-700 hover:text-primary-600 transition-colors">
                    <Upload className="h-5 w-5 mr-2" />
                    <span>Upload</span>
                  </Link>
                )}
                <Link to="/cart" className="flex items-center text-neutral-700 hover:text-primary-600 transition-colors">
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  <span>Cart</span>
                </Link>
                {isAuthenticated ? (
  <>
    <button
      className="flex items-center text-neutral-700 hover:text-primary-600 transition-colors w-full text-left py-2"
      onClick={() => {
        setIsProfileOpen(false);
        if (user?.sub) {
          navigate(`/profile/${user.sub}`);
        } else {
          navigate('/profile');
        }
      }}
    >
      <User className="h-5 w-5 mr-2" />
      <span>Profile</span>
    </button>
    <button
      className="flex items-center text-neutral-700 hover:text-primary-600 transition-colors w-full text-left py-2"
      onClick={handleLogout}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-log-out mr-2" aria-hidden="true"><path d="m16 17 5-5-5-5"></path><path d="M21 12H9"></path><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path></svg>
      <span>Log Out</span>
    </button>
  </>
) : (
  <LoginButton />
)}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;