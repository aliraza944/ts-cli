#!/usr/bin/env node

import { getSingleStockInfo } from "./getStocks";
import { getVersion } from "./getVersion";

const getArgs = () => {
  // We retrieve all the command arguments except the first 2
  const args = process.argv.slice(2);
  return args;
};

/**
 * Command Help
 */
const printCommandHelp = () => {
  const version = getVersion();
  const help = `
ts-cli (version: ${version})

A simple command to retrieve stock information.

Example:

npx ts-cli MSFT SFIX GOOG

`;
  console.log(help);
};

const symbols = getArgs();

// Print help if no arguments
if (symbols.length === 0) {
  printCommandHelp();
  getVersion();
  process.exit(0);
}

const now = new Date().toISOString();

// Call the yahoo API for each symbol and display the result on the console
symbols.forEach((symbol) => {
  console.log(`Retrieving stock information for ${symbol} at date ${now}`);
  getSingleStockInfo(symbol).then(console.log);
});
