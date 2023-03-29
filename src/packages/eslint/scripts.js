#! /usr/bin/env node

const childProcess = require("./src/utils/childProcess");

childProcess( {
    "lint": "eslint . --ext .js",
    "lint-fix": "eslint . --fix",
    "test": "node test/config"
} )

