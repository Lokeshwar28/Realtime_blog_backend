import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  logging: false,
});

sequelize.authenticate()
  .then(() => console.log('🟢 Connected to PostgreSQL via Sequelize'))
  .catch(err => console.error('🔴 Sequelize DB connection error:', err));

  sequelize.sync()
  .then(() => console.log('📦 Models synced'))
  .catch(err => console.error('❌ Sync error:', err));

export default sequelize;