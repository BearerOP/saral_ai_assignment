import { motion } from 'framer-motion';
import CommissionCard from '../../components/CommissionCard';
import LinksAndCodes from '../../components/LinksAndCodes';
import UserProfileCard from '../../components/UserProfileCard';
import PotentialEarnings from '../../components/PotentialEarnings';

const HomePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="hidden lg:grid lg:grid-cols-[470px_1fr] gap-6">
        <div className="space-y-6">
          <CommissionCard />
          <LinksAndCodes />
        </div>

        <div className="space-y-6">
          <UserProfileCard />
          <PotentialEarnings />
        </div>
      </div>

      <div className="lg:hidden space-y-4">
        <UserProfileCard />
        <CommissionCard />
        <LinksAndCodes />
        <PotentialEarnings />
      </div>
    </motion.div>
  );
};

export default HomePage;

