import { Model, DataTypes } from 'sequelize';
import sequelize from '../db';

class Budget extends Model {
  public id!: string;
  public userId!: string;
  public category!: string;
  public amount!: number;
  public month!: Date;
  public createdAt!: Date;
  public updatedAt!: Date;
}

Budget.init(
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
    category: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    amount: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    month: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'budgets',
  }
);

export default Budget;