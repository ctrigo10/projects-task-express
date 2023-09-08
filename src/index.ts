import app from './app';
import { sequelize } from './database/database';
import 'dotenv/config';
import logger from './logs/logger';

async function main() {
  console.clear();
  await sequelize.sync({ force: false });
  const PORT = process.env.PORT;
  app.listen(PORT);
  logger.info(`Server on port ${PORT}`);
  logger.error('Server on port ');
}

main();
