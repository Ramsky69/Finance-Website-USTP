import Account from './Account';
import Budget from './Budget';
import Transaction from './Transaction';
import sequelize from '../db';

// Define relationships
Account.hasMany(Transaction, { foreignKey: 'accountId' });
Transaction.belongsTo(Account, { foreignKey: 'accountId' });

// Export models and sequelize instance
export {
  Account,
  Budget,
  Transaction,
  sequelize,
};