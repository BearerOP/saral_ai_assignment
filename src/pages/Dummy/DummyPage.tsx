import { motion } from 'framer-motion';
import { Mail, ArrowUpRight, Users, Activity, Rocket } from 'lucide-react';
import { useAppSelector } from '../../store/hooks';
import avatarImg from '../../assets/images/avatar.png';
import cardBgPattern from '../../assets/images/Background.png';
import { formatCurrency } from '../../utils/formatCurrency';
import { useState } from 'react';
import { copyToClipboard } from '../../utils/copyToClipboard';
import { Info } from 'lucide-react';
import { Check, Copy, ShieldCheck } from 'lucide-react';

const DummyPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="space-y-6"
    >
      <div className="hidden lg:grid lg:grid-cols-[460px_1fr] gap-6">
        <div className="space-y-6">
          <DummyUserProfileCard />
          <DummyCommissionCard />
        </div>
        <div className="space-y-6">
          <DummyLinksAndCodes />
          <DummyPotentialEarnings />
        </div>
      </div>

      <div className="lg:hidden space-y-4">
        <DummyUserProfileCard />
        <DummyCommissionCard />
        <DummyLinksAndCodes />
        <DummyPotentialEarnings />
      </div>
    </motion.div>
  );
};

export default DummyPage;


const DummyUserProfileCard = () => {
  const { name, email } = useAppSelector((state) => state.user.user);
  const stats = useAppSelector((state) => state.stats.stats);

  const statBlocks = [
    { label: 'Total visitors', value: stats.visitors, icon: Users },
    { label: 'Posts published', value: stats.posts, icon: Activity },
    { label: 'Revenue', value: formatCurrency(stats.revenue), icon: Rocket },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="bg-gradient-to-br from-primary-50 to-white border border-gray-200 rounded-2xl shadow-card p-6 space-y-6"
    >
      <div className="flex items-center gap-4">
        <motion.div whileHover={{ scale: 1.02 }} className="relative">
          <img
            src={avatarImg}
            alt={name}
            className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl border border-white shadow-card object-cover"
          />
          <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white bg-success-500" />
        </motion.div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="text-xl font-semibold text-gray-900 truncate">{name}</h3>
            <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-primary-100 text-primary-700 uppercase tracking-widest">
              Creator
            </span>
          </div>
          <div className="mt-2 flex items-center gap-2 text-sm text-gray-600">
            <Mail size={16} />
            <span className="truncate">{email}</span>
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hidden sm:inline-flex items-center gap-2 text-sm font-semibold text-primary-600"
        >
          Profile <ArrowUpRight size={16} />
        </motion.button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {statBlocks.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + index * 0.05 }}
            className="rounded-2xl border border-gray-100 bg-white/70 backdrop-blur p-4 space-y-1"
          >
            <p className="text-xs uppercase tracking-widest text-gray-500">{stat.label}</p>
            <p className="text-xl font-semibold text-gray-900 flex items-center gap-2">
              {stat.value}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

const DummyCommissionCard = () => {
  const { rate, currentBalance, dueDate, paymentEmail } = useAppSelector(
    (state) => state.commission.commission
  );
  const { name } = useAppSelector((state) => state.user.user);

  const formattedBalance = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  }).format(currentBalance);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="bg-white border border-gray-200 rounded-2xl shadow-card p-6 space-y-6"
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">Commission</p>
            <p className="text-2xl font-semibold text-gray-900 mt-1">{formattedBalance}</p>
            <p className="text-sm text-gray-500 mt-1">Available balance for next payout</p>
        </div>
          <span className="px-3 py-1 rounded-full bg-primary-50 text-primary-700 text-xs font-semibold">
            {rate}% rate
          </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="rounded-xl border border-gray-100 p-4 bg-gray-50">
          <p className="text-xs uppercase tracking-widest text-gray-500">Next payout</p>
          <p className="text-lg font-semibold text-gray-900 mt-1">{dueDate}</p>
          <p className="text-xs text-gray-500 mt-1">Auto scheduled</p>
        </div>
        <div className="rounded-xl border border-gray-100 p-4 bg-gray-50">
          <p className="text-xs uppercase tracking-widest text-gray-500">Creator</p>
          <p className="text-lg font-semibold text-gray-900 truncate mt-1">{name}</p>
          <p className="text-xs text-gray-500 mt-1">Account owner</p>
        </div>
        <div className="rounded-xl border border-gray-100 p-4 bg-gray-50">
          <p className="text-xs uppercase tracking-widest text-gray-500">Status</p>
          <div className="flex items-center gap-2 mt-1">
            <ShieldCheck size={16} className="text-success-600" />
            <p className="text-sm font-medium text-success-700">Verified</p>
          </div>
          <p className="text-xs text-gray-500 mt-1">Compliant with policy</p>
        </div>
      </div>

      <div className="rounded-2xl border border-gray-100 bg-gradient-to-br from-primary-50 to-white p-4 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-white text-primary-600 flex items-center justify-center border border-primary-100">
            <Mail size={18} />
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-gray-500">Payment email</p>
            <p className="text-sm font-semibold text-gray-900">
              {paymentEmail || 'Add payout email'}
            </p>
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary-600"
        >
          Manage
          <ArrowUpRight size={16} />
        </motion.button>
      </div>

      <div>
        <div className="flex items-center justify-between mb-3">
          <p className="text-xs uppercase tracking-[0.3em] text-gray-500">Card preview</p>
        </div>
        <div className="relative h-[220px] sm:h-[260px] group" style={{ perspective: '1200px' }}>
          <div className="absolute inset-0 transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-700 text-white p-5 flex flex-col justify-between [backface-visibility:hidden] shadow-card">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-white/70">Saral card</p>
                <p className="text-3xl font-semibold mt-2">{formattedBalance}</p>
              </div>
              <div className="space-y-3">
                <p className="text-xs tracking-[0.3em] text-white/70">card holder</p>
                <p className="text-xl font-semibold tracking-widest truncate">{name.toUpperCase()}</p>
                <div className="text-sm text-white/70">
                  <p>Valid thru {dueDate}</p>
                  <p>{paymentEmail || 'payout@saral.app'}</p>
                </div>
              </div>
            </div>

            <div
              className="absolute inset-0 rounded-2xl text-gray-100 p-5 [transform:rotateY(180deg)] [backface-visibility:hidden] shadow-card"
              style={{
                backgroundImage: `linear-gradient(135deg, rgba(15, 23, 42, 0.9), rgba(15, 23, 42, 0.7)), url(${cardBgPattern})`,
                backgroundSize: 'cover',
                backgroundBlendMode: 'overlay',
              }}
            >
              <p className="text-xs uppercase tracking-[0.4em] text-gray-300">Back plate</p>
              <div className="mt-5 h-8 bg-white/90 rounded" />
              <div className="mt-4 rounded-lg border border-white/30 bg-white/10 p-3 text-xs space-y-2">
                <div className="flex items-center justify-between text-gray-200">
                  <span>Security band</span>
                  <span>98-772</span>
                </div>
                <div className="flex items-center justify-between text-gray-200">
                  <span>Compliance</span>
                  <span>PCI-DSS / GDPR</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const DummyLinksAndCodes = () => {
  const [copiedLink, setCopiedLink] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);
  const { trackingLink, couponCode } = useAppSelector((state) => state.links.links);

  const handleCopy = async (value: string, setter: (state: boolean) => void) => {
    const success = await copyToClipboard(value);
    if (success) {
      setter(true);
      setTimeout(() => setter(false), 2000);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="bg-white border border-gray-200 rounded-2xl shadow-card p-6 space-y-6"
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">Distribution</p>
          <p className="text-2xl font-semibold text-gray-900">Links & codes</p>
        </div>
        <button className="inline-flex items-center gap-2 text-sm font-semibold text-primary-600">
          Settings <ArrowUpRight size={16} />
        </button>
      </div>

      <div className="space-y-4">
        <div className="rounded-2xl border border-gray-100 p-4 bg-gray-50">
          <p className="text-xs uppercase tracking-widest text-gray-500">Tracking link</p>
          <div className="mt-2 flex items-center gap-3">
            <p className="flex-1 font-mono text-sm text-gray-900 truncate">{trackingLink}</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleCopy(trackingLink, setCopiedLink)}
              className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center hover:border-primary-200"
            >
              {copiedLink ? <Check size={18} className="text-success-600" /> : <Copy size={18} className="text-gray-500" />}
            </motion.button>
          </div>
          <p className="text-xs text-gray-500 mt-2">Share with partners to track performance.</p>
        </div>

        <div className="rounded-2xl border border-gray-100 p-4 bg-gray-50">
          <p className="text-xs uppercase tracking-widest text-gray-500">Coupon code</p>
          <div className="mt-2 flex items-center gap-3">
            <p className="font-mono text-lg font-semibold text-gray-900">{couponCode}</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleCopy(couponCode, setCopiedCode)}
              className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center hover:border-primary-200"
            >
              {copiedCode ? <Check size={18} className="text-success-600" /> : <Copy size={18} className="text-gray-500" />}
            </motion.button>
          </div>
          <p className="text-xs text-gray-500 mt-2">Apply to campaigns or onboarding flows.</p>
        </div>
      </div>
    </motion.div>
  );
};



const DummyPotentialEarnings = () => {
  const [posts, setPosts] = useState(1);
  const minPosts = 1;
  const maxPosts = 15;

  const calculateEarnings = (postCount: number) => Math.round(postCount * 27.5);
  const earnings = calculateEarnings(posts);
  const percentage = ((posts - minPosts) / (maxPosts - minPosts)) * 100;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.25 }}
      className="bg-white border border-gray-200 rounded-2xl shadow-card p-6 space-y-6"
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">Planner</p>
          <p className="text-2xl font-semibold text-gray-900">Performance extrapolation</p>
          <p className="text-sm text-gray-500 mt-1">
            Estimate payout based on publishing cadence.
          </p>
        </div>
        <Info size={18} className="text-gray-400" />
      </div>

      <div className="rounded-2xl border border-gray-100 bg-gray-50 p-4 flex flex-col gap-2">
        <p className="text-xs uppercase tracking-widest text-gray-500">Projected earnings</p>
        <p className="text-3xl font-semibold text-gray-900">${earnings}</p>
        <p className="text-xs text-success-600 font-semibold">+{posts * 6}% vs current avg.</p>
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between text-xs uppercase tracking-widest text-gray-500">
          <span>{minPosts} post / week</span>
          <span>{maxPosts} posts / week</span>
        </div>
        <div className="relative h-2 rounded-full bg-gray-100">
          <motion.div
            className="absolute h-full rounded-full bg-gradient-to-r from-primary-400 to-primary-600"
            animate={{ width: `${percentage}%` }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          />
          <motion.div
            className="absolute top-1/2 -translate-y-1/2 w-5 h-5 rounded-full border-2 border-white shadow-card bg-primary-600 cursor-grab"
            style={{ left: `calc(${percentage}% - 10px)` }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0}
            dragMomentum={false}
            onDrag={(_, info) => {
              const sliderWidth = 420;
              const newPercentage = Math.max(
                0,
                Math.min(100, ((info.point.x - 24) / sliderWidth) * 100)
              );
              const newPosts = Math.round(
                minPosts + (newPercentage / 100) * (maxPosts - minPosts)
              );
              setPosts(Math.max(minPosts, Math.min(maxPosts, newPosts)));
            }}
          />
          <input
            type="range"
            min={minPosts}
            max={maxPosts}
            value={posts}
            onChange={(e) => setPosts(parseInt(e.target.value))}
            className="absolute inset-0 w-full opacity-0 cursor-pointer"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 text-sm">
        <div className="rounded-xl border border-gray-100 p-3 bg-gray-50">
          <p className="text-xs uppercase tracking-widest text-gray-500">Suggested cadence</p>
          <p className="text-lg font-semibold text-gray-900">{posts} posts / week</p>
        </div>
        <div className="rounded-xl border border-gray-100 p-3 bg-gray-50">
          <p className="text-xs uppercase tracking-widest text-gray-500">Reach delta</p>
          <p className="text-lg font-semibold text-gray-900">{posts * 120}+ new visits</p>
        </div>
      </div>
    </motion.div>
  );
};


