import '@testing-library/jest-dom';

// Mock Web Crypto API for tests
if (typeof globalThis.crypto === 'undefined') {
  const { webcrypto } = require('crypto');
  globalThis.crypto = webcrypto;
}
