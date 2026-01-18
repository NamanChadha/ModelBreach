import { query } from './db';
import crypto from 'crypto';
import axios from 'axios';

const ENGINE_URL = process.env.ENGINE_URL || 'http://localhost:8000';

export interface Arena {
    id: string;
    status: 'OPEN' | 'LOCKED';
    created_at: Date;
}

export const createArena = async (): Promise<string> => {
    const seed = crypto.randomBytes(16).toString('hex');

    // 1. Get Challenges from Engine
    // console.log(`Requesting challenges for seed: ${seed}`);
    // const engineRes = await axios.post(`${ENGINE_URL}/generate`, { seed });
    // const challenges = engineRes.data.challenges;

    // For now, mock challenges or just insert arena
    const res = await query(
        'INSERT INTO arenas (seed) VALUES ($1) RETURNING id',
        [seed]
    );
    const arenaId = res.rows[0].id;

    // TODO: Insert challenges into DB

    return arenaId;
};

export const getArena = async (id: string) => {
    const res = await query('SELECT id, status, created_at FROM arenas WHERE id = $1', [id]);
    return res.rows[0];
};
