import { motion } from 'framer-motion';
import Card from '../../common/Card/Card';
import Button from '../../common/Button/Button';
import { useAppSelector } from '../../store/hooks';
import avatarImg from '../../assets/images/avatar.png';

const ProfilePage = () => {
  const { name, email } = useAppSelector((state) => state.user.user);
  const stats = useAppSelector((state) => state.stats.stats);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-text-default mb-2">Profile</h1>
        <p className="text-text-subdued">Manage your account settings</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="p-6 lg:col-span-2">
          <div className="flex items-center gap-6 mb-6 flex-col lg:flex-row">
            <img src={avatarImg} alt={name} className="w-24 h-24 rounded-full object-cover ring-4 ring-purple-100" />
            <div className="flex flex-col items-center lg:items-start">
              <h2 className="text-xl font-semibold text-text-default mb-1">{name}</h2>
              <p className="text-text-subdued mb-3">{email}</p>
              <Button variant="secondary" size="sm">Edit Profile</Button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 pt-6 border-t border-border-default">
            <div>
              <label className="block text-sm font-medium text-text-subdued mb-2">Full Name</label>
              <input 
                type="text" 
                value={name}
                readOnly
                className="w-full px-4 py-2 border border-border-default rounded-lg bg-gray-50"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-text-subdued mb-2">Email Address</label>
              <input 
                type="email" 
                value={email}
                readOnly
                className="w-full px-4 py-2 border border-border-default rounded-lg bg-gray-50"
              />
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="font-semibold text-text-default mb-4">Quick Stats</h3>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-text-subdued">Total Posts</p>
              <p className="text-2xl font-bold text-purple-400">{stats.posts}</p>
            </div>
            <div>
              <p className="text-sm text-text-subdued">Total Visitors</p>
              <p className="text-2xl font-bold text-text-default">{stats.visitors}</p>
            </div>
            <div>
              <p className="text-sm text-text-subdued">Total Orders</p>
              <p className="text-2xl font-bold text-text-default">{stats.orders}</p>
            </div>
          </div>
        </Card>
      </div>
    </motion.div>
  );
};

export default ProfilePage;

