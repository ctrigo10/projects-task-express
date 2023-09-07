import app from './app.js';
import 'dotenv/config';

async function main() {
  console.clear();
  const PORT = process.env.PORT;
  app.listen(PORT);
  console.log('Server listening on ', PORT);
}

main();
