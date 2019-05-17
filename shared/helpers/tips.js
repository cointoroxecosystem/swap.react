const tips = {
  loader: [
    'Do not forget to save your private keys!',
    '100% Decentralized Cryptocurrency Wallet Supporting p2p Coin & Token Swaps',
    'Atomicswapwallet.io Does Not Store Your Keys, Coins, and Data. Remember to Save Your Private Keys!',
  ],
}

const getRandomTip = sectionName => tips[sectionName][Math.floor(Math.random() * tips[sectionName].length)]

export default getRandomTip
