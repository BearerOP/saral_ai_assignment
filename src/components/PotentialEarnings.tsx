import { motion } from 'framer-motion';
import { Info } from 'lucide-react';
import { useState } from 'react';

const PotentialEarnings = () => {
  const [posts, setPosts] = useState(1);
  const minPosts = 1;
  const maxPosts = 15;
  
  const calculateEarnings = (postCount: number) => {
    return Math.round(postCount * 27.5);
  };

  const earnings = calculateEarnings(posts);
  const percentage = ((posts - minPosts) / (maxPosts - minPosts)) * 100;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="bg-white rounded-lg p-6 shadow-soft"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="text-lg font-medium text-text-primary uppercase tracking-wide">
              Potential Earnings
            </h3>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <Info size={16} className="text-text-subdued" />
            </motion.button>
          </div>
          <p className="text-sm text-text-subdued leading-relaxed">
            How much you might earn with more posts!
          </p>
        </div>

        <div className="text-right">
          <motion.p
            key={earnings}
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className={`text-2xl lg:text-3xl font-medium ${
              earnings === 0 ? 'text-text-disabled' : 'text-purple-400'
            }`}
          >
            $ {earnings}
          </motion.p>
          <div className="w-12 h-0.5 bg-border-default mt-1" />
        </div>
      </div>

      <div className="flex items-center justify-between mb-2 px-1">
        <span className="text-sm font-medium text-text-subdued">{minPosts} Post</span>
        <span className="text-sm font-medium text-text-subdued">{maxPosts} Posts</span>
      </div>

      <div className="relative">
        <div className="relative h-1 bg-purple-50 rounded-full overflow-hidden">
          <motion.div
          className="absolute left-0 top-0 h-full bg-gradient-to-r from-purple-400 to-purple-500 rounded-full"
          initial={{ width: '0%' }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          />
        </div>

        <motion.div
          className="absolute top-1/2 -translate-y-1/2 w-5 h-5 bg-white border-2 border-purple-400 rounded-full cursor-grab shadow-lg"
          style={{ left: `calc(${percentage}% - 10px)` }}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0}
        dragMomentum={false}
        whileDrag={{ scale: 1.15, cursor: 'grabbing' }}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.2 }}
          onDrag={(_, info) => {
            const sliderWidth = 422;
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

      <div className="mt-4 text-center">
        <motion.p
          key={posts}
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-sm text-text-subdued"
        >
          With <span className="font-medium text-purple-400">{posts}</span>{' '}
          {posts === 1 ? 'post' : 'posts'}, you could earn{' '}
          <span className="font-medium text-purple-400">${earnings}</span>
        </motion.p>
      </div>
    </motion.div>
  );
};

export default PotentialEarnings;

