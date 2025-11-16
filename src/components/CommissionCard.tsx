import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { useAppSelector } from '../store/hooks';
import chipCardImg from '../assets/images/chip-card.png';
import cardBgPattern from '../assets/images/Background.png';
import faviconImg from '../assets/images/favicon-4520fe.png';
import logoIcon from '../assets/icons/icon.svg';

const CommissionCard = () => {
  const { rate, currentBalance, dueDate, paymentEmail } = useAppSelector(
    (state) => state.commission.commission
  );
  const { name } = useAppSelector((state) => state.user.user);

  return (
    <>
      <style>{`
        .commission-card-container {
          width: 234px;
          height: 138px;
          border-radius: 11.1659574508667px;
        }
        .commission-card-bg {
          width: 233.79px;
          height: 137.48px;
          top: 0.7px;
          border-radius: 11.1659574508667px;
        }
        .commission-card-pattern {
          width: 233.03px;
          height: 137px;
          left: -0.03px;
          border-radius: 11.1659574508667px;
        }
        .commission-card-balance {
          left: 12px;
          top: 12px;
          width: 82px;
        }
        .commission-card-balance-label {
          font-size: 10px;
        }
        .commission-card-balance-amount {
          font-size: 22px;
          line-height: 1.5em;
        }
        .commission-card-chip {
          left: 191px;
          top: 18px;
          width: 24px;
          height: 24px;
        }
        .commission-card-holder {
          left: 12px;
          top: 98px;
          width: 59px;
        }
        .commission-card-holder-label {
          font-size: 8px;
        }
        .commission-card-holder-name {
          font-size: 10px;
        }
        .commission-card-logo {
          left: 162px;
          top: 109px;
          width: 59px;
          height: 16px;
        }
        .commission-card-logo-icon {
          width: 17.62px;
          height: 17.61px;
          border-radius: 1.7823654413223267px;
        }
        .commission-card-logo-text {
          font-size: 10.759322166442871px;
          line-height: 1.2000000531822155em;
          margin-left: 4px;
        }
        @media (min-width: 768px) {
          .commission-card-container {
            width: 335.45px;
            height: 198px;
            border-radius: 16px;
          }
          .commission-card-bg {
            width: 335px;
            height: 197px;
            top: 1px;
            border-radius: 16px;
          }
          .commission-card-pattern {
            width: 335.04px;
            height: 197px;
            left: -0.04px;
            border-radius: 16px;
          }
          .commission-card-balance {
            left: 20px;
            top: 20px;
            width: 151px;
          }
          .commission-card-balance-label {
            font-size: 14px;
          }
          .commission-card-balance-amount {
            font-size: 31.550283432006836px;
            line-height: 1.2em;
          }
          .commission-card-chip {
            left: 274px;
            top: 26px;
            width: 34.77px;
            height: 34.77px;
          }
          .commission-card-holder {
            left: 20px;
            top: 142px;
            width: 123px;
          }
          .commission-card-holder-label {
            font-size: 9.180000305175781px;
          }
          .commission-card-holder-name {
            font-size: 14px;
          }
          .commission-card-logo {
            left: 226px;
            top: 152px;
            width: 85px;
            height: 25px;
          }
          .commission-card-logo-icon {
            width: 25.25px;
            height: 25.23px;
            border-radius: 2.553999185562134px;
          }
          .commission-card-logo-text {
            font-size: 15.41732120513916px;
            line-height: 1.2000000247429317em;
            margin-left: 0px;
          }
        }
      `}</style>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="bg-white rounded-lg shadow-soft w-full"
      style={{ padding: '16px' }}
    >
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-lg font-medium text-text-primary">My Commission</h3>
          <p className="text-sm text-text-subdued">{rate}% Commission</p>
        </div>
        <div className="text-right">
          <p className="text-xs font-medium text-text-subdued mb-1">Due on</p>
          <p className="text-sm font-medium text-text-default">{dueDate}</p>
        </div>
      </div>

      <div
        className="relative overflow-hidden mx-auto commission-card-container"
        style={{
          marginTop: '24px',
        }}
      >
        <div
          className="absolute commission-card-bg"
          style={{
            left: '0px',
            background: '#9F6AEE',
          }}
        />

        <div
          className="absolute pointer-events-none commission-card-pattern"
          style={{
            top: '0px',
            backgroundImage: `url(${cardBgPattern})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />

        <div
          className="absolute commission-card-balance"
        >
          <p
            className="font-poppins commission-card-balance-label"
            style={{
              fontWeight: 400,
              lineHeight: '1.5em',
              color: '#EEEEEE',
              marginBottom: '0px',
            }}
          >
            Current balance
          </p>
          <p
            className="font-poppins commission-card-balance-amount"
            style={{
              fontWeight: 500,
              color: '#FFFFFF',
              marginTop: '0px',
            }}
          >
            $ {currentBalance.toFixed(2)}
          </p>
        </div>

        <img
          src={chipCardImg}
          alt=""
          className="absolute commission-card-chip"
        />

        <div
          className="absolute commission-card-holder"
        >
          <p
            className="font-poppins commission-card-holder-label"
            style={{
              fontWeight: 400,
              lineHeight: '1.5em',
              color: '#EEEEEE',
              marginBottom: '0px',
            }}
          >
            Card Holder
          </p>
          <div style={{ height: '2px' }} />
          <p
            className="font-poppins commission-card-holder-name"
            style={{
              fontWeight: 500,
              lineHeight: '1.5em',
              color: '#FFFFFF',
              marginTop: '0px',
              textTransform: 'uppercase',
            }}
          >
            {name}
          </p>
        </div>

        <div
          className="absolute flex items-center commission-card-logo"
        >
          <div
            className="commission-card-logo-icon"
            style={{
              flexShrink: 0,
            }}
          >
            <img
              src={logoIcon}
              alt=""
              className="brightness-0 invert"
              style={{
                width: '100%',
                height: '100%',
              }}
            />
          </div>
          <span
            className="font-syne commission-card-logo-text"
            style={{
              fontWeight: 700,
              letterSpacing: '0.015em',
              textTransform: 'uppercase',
              color: '#FFFFFF',
            }}
          >
            SARAL
          </span>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between p-2 border border-border-default rounded hover:bg-gray-50 transition-colors">
        <div className="flex items-center gap-2">
          <img src={faviconImg} alt="" className="w-5 h-5 rounded" />
          <span className="text-sm text-text-subdued">Payment Email:</span>
        </div>
        <span className="text-sm text-text-default">{paymentEmail || 'N/A'}</span>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronRight size={20} className="text-text-subdued" />
        </motion.button>
      </div>
    </motion.div>
    </>
  );
};

export default CommissionCard;
