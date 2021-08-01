#!/usr/bin/env node

const { sync: spawnSync } = require('cross-spawn')
const register = require.resolve("@swc-node/register")

process.exit(
  spawnSync(
    'node',
    ['-r', register, ...process.argv.slice(2)],
    { stdio: 'inherit' }
  ).status
)