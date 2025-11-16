import { motion } from 'framer-motion';
import Card from '../../common/Card/Card';
import { Image, FileText, Video } from 'lucide-react';

const AssetsPage = () => {
  const assetTypes = [
    { name: 'Images', count: 24, icon: Image, color: 'bg-blue-50 text-blue-500' },
    { name: 'Documents', count: 12, icon: FileText, color: 'bg-orange-50 text-orange-500' },
    { name: 'Videos', count: 8, icon: Video, color: 'bg-purple-50 text-purple-500' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-text-default mb-2">Assets</h1>
        <p className="text-text-subdued">Manage your media files and documents</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {assetTypes.map((asset, index) => {
          const Icon = asset.icon;
          return (
            <Card key={asset.name} delay={index * 0.1} className="p-8">
              <div className={`w-16 h-16 rounded-lg ${asset.color} flex items-center justify-center mb-4`}>
                <Icon size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-semibold text-text-default mb-1">{asset.name}</h3>
              <p className="text-3xl font-bold text-purple-400">{asset.count}</p>
            </Card>
          );
        })}
      </div>
    </motion.div>
  );
};

export default AssetsPage;

