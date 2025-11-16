import { motion } from 'framer-motion';
import Card from '../../common/Card/Card';
import { useAppSelector } from '../../store/hooks';
import { formatCurrency } from '../../utils/formatCurrency';

const PaymentsPage = () => {
  const { currentBalance, rate } = useAppSelector((state) => state.commission.commission);
  const { revenue } = useAppSelector((state) => state.stats.stats);

  const paymentHistory = [
    { date: '05/24', amount: 156.50, status: 'Paid' },
    { date: '04/24', amount: 234.75, status: 'Paid' },
    { date: '03/24', amount: 189.25, status: 'Paid' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-text-default mb-2">Payments</h1>
        <p className="text-text-subdued">View your earnings and payment history</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <Card className="p-6">
          <p className="text-sm text-text-subdued mb-1">Current Balance</p>
          <p className="text-3xl font-bold text-purple-400">{formatCurrency(currentBalance)}</p>
        </Card>
        <Card className="p-6">
          <p className="text-sm text-text-subdued mb-1">Total Revenue</p>
          <p className="text-3xl font-bold text-text-default">{formatCurrency(revenue)}</p>
        </Card>
        <Card className="p-6">
          <p className="text-sm text-text-subdued mb-1">Commission Rate</p>
          <p className="text-3xl font-bold text-text-default">{rate}%</p>
        </Card>
      </div>

      <Card className="p-6">
        <h2 className="text-lg font-semibold text-text-default mb-4">Payment History</h2>
        <div className="space-y-3">
          {paymentHistory.map((payment, index) => (
            <div key={index} className="flex items-center justify-between py-3 border-b border-border-default last:border-0">
              <div>
                <p className="font-medium text-text-default">{formatCurrency(payment.amount)}</p>
                <p className="text-sm text-text-subdued">Due: {payment.date}</p>
              </div>
              <span className="text-sm font-medium text-green-500 bg-green-50 px-3 py-1 rounded">
                {payment.status}
              </span>
            </div>
          ))}
        </div>
      </Card>
    </motion.div>
  );
};

export default PaymentsPage;

