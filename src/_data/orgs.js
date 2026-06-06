import { readFileSync, readdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DB_DIR = join(__dirname, '..', '_db', 'orgs');

export default function () {
  if (!existsSync(DB_DIR)) return [];
  return readdirSync(DB_DIR)
    .filter(f => f.endsWith('.json'))
    .map(f => JSON.parse(readFileSync(join(DB_DIR, f), 'utf8')))
    .sort((a, b) => (a.name || '').localeCompare(b.name || ''));
}
