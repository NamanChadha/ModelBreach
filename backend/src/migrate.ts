import fs from 'fs';
import path from 'path';
import { query } from './db';
import dotenv from 'dotenv';

dotenv.config();

const runMigration = async () => {
    try {
        const schemaPath = path.join(__dirname, '..', 'schema.sql');
        const schemaSql = fs.readFileSync(schemaPath, 'utf8');

        console.log('Running migration...');
        await query(schemaSql);
        console.log('Migration completed successfully.');
    } catch (err) {
        console.error('Migration failed:', err);
        process.exit(1);
    }
};

runMigration();
