import { randomBytes } from 'crypto';
const crypto = require('crypto');
export const tokenEncrypte: string = randomBytes(32).toString('hex');