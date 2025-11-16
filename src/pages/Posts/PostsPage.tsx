import { motion } from 'framer-motion';
import Card from '../../common/Card/Card';
import { useAppSelector } from '../../store/hooks';

const PostsPage = () => {
  const { posts } = useAppSelector((state) => state.stats.stats);

  const dummyPosts = Array.from({ length: posts }, (_, i) => ({
    id: i + 1,
    title: `Post ${i + 1}`,
    date: new Date(2024, 10, i + 1).toLocaleDateString(),
    views: Math.floor(Math.random() * 1000) + 100,
    engagement: `${(Math.random() * 10 + 1).toFixed(1)}%`,
  }));

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-text-default mb-2">My Posts</h1>
        <p className="text-text-subdued">Manage and track your content performance</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {dummyPosts.map((post, index) => (
          <Card key={post.id} delay={index * 0.05} className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-medium text-text-default">{post.title}</h3>
              <span className="text-xs text-text-subdued">{post.date}</span>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-xs text-text-subdued">Views</p>
                <p className="text-lg font-semibold text-text-default">{post.views}</p>
              </div>
              <div>
                <p className="text-xs text-text-subdued">Engagement</p>
                <p className="text-lg font-semibold text-purple-400">{post.engagement}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </motion.div>
  );
};

export default PostsPage;

