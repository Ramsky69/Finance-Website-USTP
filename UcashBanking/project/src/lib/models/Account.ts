import { Model, DataTypes } from 'sequelize';
import sequelize from '../db';

class Account extends Model {
  public id!: string;
  public userId!: string;
  public accountNumber!: string;
  public balance!: number;
  public accountType!: string;
  public isActive!: boolean;
  public createdAt!: Date;
  public updatedAt!: Date;
}

Account.init(
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
    accountNumber: {
      type: DataTypes.STRING(20),
      allowNull: false,
      unique: true,
    },
    balance: {
      type: DataTypes.DECIMAL(12, 2),
      allowNull: false,
      defaultValue: 0,
    },
    accountType: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
  },
  {
    sequelize,
    tableName: 'accounts',
  }
);

export default Account;