import { motion } from 'framer-motion';
import { Calendar, Bell, Menu } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ROUTES } from '../constants/routes';
import IconWrapper from '../common/Icon/IconWrapper';
import logoIcon from '../assets/icons/icon.svg';
import homeIcon from '../assets/icons/home.svg';
import albumIcon from '../assets/icons/album.svg';
import suitcaseIcon from '../assets/icons/suitcase.svg';
import uploadsIcon from '../assets/icons/uploads.svg';
import paymentIcon from '../assets/icons/payment.svg';
import userIcon from '../assets/icons/user_rounded.svg';

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { id: 'home', label: 'Home', icon: homeIcon, path: ROUTES.HOME },
    { id: 'posts', label: 'Posts', icon: albumIcon, path: ROUTES.POSTS },
    { id: 'assets', label: 'Assets', icon: suitcaseIcon, path: ROUTES.ASSETS },
    { id: 'uploads', label: 'Uploads', icon: uploadsIcon, path: ROUTES.UPLOADS },
    { id: 'payments', label: 'Payments', icon: paymentIcon, path: ROUTES.PAYMENTS },
    { id: 'profile', label: 'Profile', icon: userIcon, path: ROUTES.PROFILE },
  ];

  return (
    <motion.nav
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="sticky top-0 z-50 bg-white border-b border-border-default"
    >
      <div className="max-w-[1280px] mx-auto px-6 py-4 lg:py-6">
        <div className="flex items-center justify-between">
          <motion.div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => navigate(ROUTES.HOME)}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            transition={{ duration: 0.2 }}
          >
            <img 
              src={logoIcon} 
              alt="Saral" 
              className="w-10 h-10 lg:w-12 lg:h-12"
            />
            <span className="text-xl lg:text-2xl font-syne font-bold tracking-wider text-purple-400 uppercase">
              Saral
            </span>
          </motion.div>

          <div className="hidden lg:flex items-center gap-4">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              
              return (
                <motion.button
                  key={item.id}
                  onClick={() => navigate(item.path)}
                  className="flex flex-col items-center gap-1 px-4 py-3 rounded-lg relative transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  <IconWrapper
                    src={item.icon}
                    alt={item.label}
                    size={26}
                    isActive={isActive}
                  />
                  <span className={`text-sm ${isActive ? 'font-medium text-text-highlight' : 'font-normal text-text-subdued'}`}>
                    {item.label}
                  </span>
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-purple-50 rounded-lg -z-10"
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    />
                  )}
                </motion.button>
              );
            })}
          </div>

          <div className="hidden lg:flex items-center gap-6">
            <motion.button
              className="flex items-center gap-2 px-4 py-2 border border-border-default rounded hover:bg-gray-50"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              transition={{ duration: 0.2 }}
            >
              <Calendar size={16} />
              <span className="text-sm font-medium">All time</span>
            </motion.button>

            <motion.button
              className="relative"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <Bell size={24} />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full" />
            </motion.button>

            <motion.div
              className="w-9 h-9 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 cursor-pointer"
              onClick={() => navigate(ROUTES.PROFILE)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            />
          </div>

          <div className="flex lg:hidden items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <Bell size={24} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <Menu size={24} />
            </motion.button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
