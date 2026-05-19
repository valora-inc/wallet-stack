// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config')
const { withWalletStackConfig } = require('wallet-stack/metro-config')

/** @type {import('expo/metro-config').MetroConfig} */
const config = withWalletStackConfig(getDefaultConfig(__dirname))

module.exports = config
