import { motion } from 'framer-motion';
import { Mail, Edit, Users, Album, DollarSign, ShoppingBag } from 'lucide-react';
import { useAppSelector } from '../store/hooks';
import { formatCurrency } from '../utils/formatCurrency';
import avatarImg from '../assets/images/avatar.png';
import radialBg from '../assets/radial-bg.svg';

const UserProfileCard = () => {
  const { name, email } = useAppSelector((state) => state.user.user);
  const stats = useAppSelector((state) => state.stats.stats);

  const statsConfig = [
    { label: 'Visitors', value: stats.visitors, icon: Users, color: 'bg-red-50', iconColor: 'text-red-500' },
    { label: 'Posts', value: stats.posts, icon: Album, color: 'bg-blue-50', iconColor: 'text-blue-500' },
    { label: 'Revenue', value: formatCurrency(stats.revenue), icon: DollarSign, color: 'bg-orange-50', iconColor: 'text-orange-500' },
    { label: 'Orders', value: stats.orders, icon: ShoppingBag, color: 'bg-yellow-50', iconColor: 'text-yellow-500' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="bg-white rounded-lg p-6 shadow-soft relative overflow-hidden"
    >
      <div 
        className="absolute inset-0 opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage: `url(${radialBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />

      <div className="relative">
        <div className="flex flex-col items-center mb-6">
          <motion.div
            className="relative mb-4"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 rounded-full overflow-hidden ring-4 ring-purple-100">
              <img
                src={avatarImg}
                alt={name}
                className="w-full h-full object-cover"
              />
            </div>
            <motion.div
              className="absolute -bottom-1 -right-1 w-6 h-6 sm:w-8 sm:h-8 bg-green-500 rounded-full border-4 border-white"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>

          <h3 className="text-base sm:text-lg lg:text-xl font-medium text-text-default mb-2 px-4 text-center truncate w-full max-w-full">{name}</h3>

          <div className="flex items-center justify-center gap-3 w-full max-w-full">
           <div className="flex items-center gap-2">
           <Mail size={18} className="text-text-default flex-shrink-0" strokeWidth={1.5} />
            <span className="text-sm sm:text-base text-text-default truncate min-w-0 flex-1 text-center">{email}</span>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="flex-shrink-0"
            >
              <Edit size={18} className="text-text-default" strokeWidth={1.5} />
            </motion.button>
           </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 sm:gap-4">
          {statsConfig.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.05, duration: 0.1 }}
                whileHover={{ scale: 1.02, y: -1 }}
                className="flex items-center gap-2 sm:gap-3 p-2 sm:p-4 border border-border-default rounded-lg cursor-pointer transition-shadow hover:shadow-sm min-w-0"
              >
                <div
                  className={`w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 ${stat.color} rounded-lg flex items-center justify-center flex-shrink-0`}
                >
                  <Icon size={20} className={`${stat.iconColor} sm:w-6 sm:h-6`} strokeWidth={1.5} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-base sm:text-xl lg:text-2xl font-medium text-text-default tracking-wider truncate">
                    {stat.value}
                  </p>
                  <p className="text-xs sm:text-sm text-text-subdued opacity-70 truncate">{stat.label}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default UserProfileCard;
