import { Model, DataTypes } from 'sequelize';
import sequelize from '../db';

class Transaction extends Model {
  public id!: string;
  public userId!: string;
  public amount!: number;
  public description!: string;
  public category!: string;
  public transactionType!: 'EXPENSE' | 'INCOME' | 'TRANSFER';
  public createdAt!: Date;
  public updatedAt!: Date;
}

Transaction.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    amount: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    transactionType: {
      type: DataTypes.ENUM('EXPENSE', 'INCOME', 'TRANSFER'),
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'transactions',
  }
);

export default Transaction;