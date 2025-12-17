import { execSync } from 'child_process';

const {
  POSTMAN_EXPORT_PATH,
  POSTMAN_COLLECTION_NAME,
  REPORT_DIR,
} = process.env;

if (!POSTMAN_EXPORT_PATH || !POSTMAN_COLLECTION_NAME) {
  console.error('❌ Missing env vars');
  process.exit(1);
}

const collectionPath = `${POSTMAN_EXPORT_PATH}/${POSTMAN_COLLECTION_NAME}.postman_collection.json`;
const reportPath = `${REPORT_DIR}/newman.html`;

console.log('▶ Running Newman with:');
console.log('  Collection:', collectionPath);
console.log('  Report:', reportPath);

execSync(
  `newman run ${collectionPath} --reporters cli,htmlextra --reporter-htmlextra-export ${reportPath}`,
  { stdio: 'inherit' }
);
console.log('✅ Newman run completed');