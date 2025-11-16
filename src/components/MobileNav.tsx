import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { ROUTES } from '../constants/routes';
import IconWrapper from '../common/Icon/IconWrapper';
import homeIcon from '../assets/icons/home.svg';
import albumIcon from '../assets/icons/album.svg';
import suitcaseIcon from '../assets/icons/suitcase.svg';
import uploadsIcon from '../assets/icons/uploads.svg';
import paymentIcon from '../assets/icons/payment.svg';
import userIcon from '../assets/icons/user_rounded.svg';

const MobileNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { id: 'home', icon: homeIcon, path: ROUTES.HOME },
    { id: 'posts', icon: albumIcon, path: ROUTES.POSTS },
    { id: 'assets', icon: suitcaseIcon, path: ROUTES.ASSETS },
    { id: 'uploads', icon: uploadsIcon, path: ROUTES.UPLOADS },
    { id: 'payments', icon: paymentIcon, path: ROUTES.PAYMENTS },
    { id: 'profile', icon: userIcon, path: ROUTES.PROFILE },
  ];

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="fixed bottom-0 left-0 right-0 lg:hidden bg-white border-t border-border-default z-50"
    >
      <div className="flex items-center justify-around py-3">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          
          return (
            <motion.button
              key={item.id}
              onClick={() => navigate(item.path)}
              className="flex flex-col items-center justify-center p-2 relative"
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                animate={{ scale: isActive ? 1.1 : 1 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                <IconWrapper
                  src={item.icon}
                  size={24}
                  isActive={isActive}
                />
                {isActive && (
                  <motion.div
                    layoutId="activeMobileTab"
                    className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-1 h-1 bg-purple-400 rounded-full"
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  />
                )}
              </motion.div>
            </motion.button>
          );
        })}
      </div>
    </motion.div>
  );
};

export default MobileNav;
