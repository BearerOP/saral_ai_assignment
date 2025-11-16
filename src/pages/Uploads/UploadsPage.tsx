import { motion } from 'framer-motion';
import Card from '../../common/Card/Card';
import Button from '../../common/Button/Button';
import { Upload, FileUp } from 'lucide-react';

const UploadsPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-text-default mb-2">Uploads</h1>
        <p className="text-text-subdued">Upload and manage your content</p>
      </div>

      <Card className="p-12 text-center">
        <div className="max-w-md mx-auto">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-purple-50 flex items-center justify-center">
            <Upload size={40} className="text-purple-400" strokeWidth={1.5} />
          </div>
          <h2 className="text-xl font-semibold text-text-default mb-2">Upload your content</h2>
          <p className="text-text-subdued mb-6">
            Drag and drop files here or click to browse
          </p>
          <Button variant="primary" className="inline-flex items-center gap-2">
            <FileUp size={18} />
            Choose Files
          </Button>
        </div>
      </Card>
    </motion.div>
  );
};

export default UploadsPage;

