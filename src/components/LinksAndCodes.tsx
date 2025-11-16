import { motion } from 'framer-motion';
import { Copy, ChevronRight, Check } from 'lucide-react';
import { useState } from 'react';
import { useAppSelector } from '../store/hooks';
import { copyToClipboard } from '../utils/copyToClipboard';

const LinksAndCodes = () => {
  const [copiedLink, setCopiedLink] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);
  const { trackingLink, couponCode } = useAppSelector((state) => state.links.links);

  const handleCopyLink = async () => {
    const success = await copyToClipboard(trackingLink);
    if (success) {
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  const handleCopyCode = async () => {
    const success = await copyToClipboard(couponCode);
    if (success) {
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2000);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="bg-white rounded-lg p-6 shadow-soft"
    >
      <h3 className="text-lg font-medium text-text-default mb-6 uppercase tracking-wide">
        My Links & Codes
      </h3>

      <div className="mb-6">
        <div className="mb-2">
          <span className="text-sm text-text-subdued">Tracking Link :</span>
        </div>
        <div
          className="flex items-center justify-between p-3 border border-dashed border-purple-100 rounded bg-purple-50/30 hover:bg-purple-50/50 transition-colors"
        >
          <span className="text-sm font-fira text-text-highlight lowercase flex-1 overflow-hidden text-ellipsis">
            {trackingLink}
          </span>
          <motion.button
            onClick={handleCopyLink}
            className="ml-3 p-1"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            {copiedLink ? (
              <Check size={20} className="text-green-500" />
            ) : (
              <Copy size={20} className="text-text-subdued" />
            )}
          </motion.button>
        </div>
      </div>

      <div className="border-t border-border-default mb-6" />

      <div>
        <div className="mb-2">
          <span className="text-sm text-text-subdued">Coupon Code :</span>
        </div>
        <div className="flex items-center gap-3">
          <div
            className="flex items-center justify-between px-4 py-2 border border-dashed border-purple-100 rounded bg-purple-50/30 hover:bg-purple-50/50 transition-colors"
          >
            <span className="text-sm font-fira text-text-highlight font-medium tracking-wide">
              {couponCode}
            </span>
            <motion.button
              onClick={handleCopyCode}
              className="ml-4 p-1"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              {copiedCode ? (
                <Check size={20} className="text-green-500" />
              ) : (
                <Copy size={20} className="text-text-subdued" />
              )}
            </motion.button>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronRight size={24} className="text-text-subdued" />
          </motion.button>
        </div>
      </div>

    </motion.div>
  );
};

export default LinksAndCodes;
