import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { query } from './db';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Arena Routes
app.post('/api/arena', async (req, res) => {
    try {
        const { createArena } = await import('./arena');
        const arenaId = await createArena();
        res.json({ id: arenaId });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to create arena' });
    }
});

app.listen(PORT, async () => {
    console.log(`Backend running on port ${PORT}`);
    try {
        const res = await query('SELECT NOW()');
        console.log('Database connected:', res.rows[0]);
    } catch (err) {
        console.error('Database connection failed:', err);
    }
});
