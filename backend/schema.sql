-- Arenas table: Stores the game sessions
CREATE TABLE IF NOT EXISTS arenas (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  seed VARCHAR(255) NOT NULL,
  status VARCHAR(20) NOT NULL DEFAULT 'OPEN', -- OPEN, LOCKED
  winner_id VARCHAR(255),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  locked_at TIMESTAMP WITH TIME ZONE
);

-- Challenges table: Derived from seed, but we can store metadata if needed. 
-- Actually, challenges are deterministic, but we might want to store completion status per arena.
-- Let's stick to the plan: verification is server-side hash based.
-- We need to track which challenges are solved in an arena.

-- Challenge Solves table: Who solved what in which arena
CREATE TABLE IF NOT EXISTS solves (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    arena_id UUID REFERENCES arenas(id),
    user_id VARCHAR(255) NOT NULL,
    challenge_index INT NOT NULL, -- 0, 1, 2
    timestamp TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Attempts/Audit Log: Append-only log of all interactions
CREATE TABLE IF NOT EXISTS audit_log (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    arena_id UUID REFERENCES arenas(id),
    user_id VARCHAR(255),
    event_type VARCHAR(50) NOT NULL, -- 'ATTEMPT', 'SOLVE', 'WIN', 'CREATE'
    payload JSONB,
    timestamp TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    prev_hash VARCHAR(64) -- For tamper-evidence (chaining)
);

CREATE INDEX IF NOT EXISTS idx_audit_arena ON audit_log(arena_id);
