CREATE TABLE revoked_tokens (
    id INT AUTO_INCREMENT PRIMARY KEY,
    token VARCHAR(512) NOT NULL,         -- il JWT completo o il suo jti/identificativo
    user_id VARCHAR(255) NULL,           -- opzionale: collega al tuo freelanceRegistry
    revoked_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    expires_at TIMESTAMP NOT NULL        -- data di scadenza del token
);
