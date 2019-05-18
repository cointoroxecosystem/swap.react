import React from 'react'
import { connect } from 'redaction'

import PageHeadline from 'components/PageHeadline/PageHeadline'
import SubTitle from 'components/PageHeadline/SubTitle/SubTitle'
import { FormattedMessage } from 'react-intl'


const About = ({ address }) => (
  <section style={{ height: '100%' }}>
  <h1>AtomicSwapWallet.io</h1>
  <h5>100% Decentralized Browser-based Cryptocurrency Wallet Supporting Atomic Swaps</h5>
  <b>Supported Coins for Wallet:</b> Bitcoin, Bitcoin Cash, EOS, Telos (coming soon), Litecoin, USDT(omni), Ethereum, and various ERC20 Tokens
  <b>Supported Pairs for Atomic Swaps:</b> 
  
  <li>Swaps for BCH, EOS, TLOS are coming soon</li>
  <li>Bitcoin can be Swapped for Ethereum, ERC20 Tokens, Litecoin</li>
  <li>Ethereum can be Swapped for Bitcoin, Litecoin</li>
  <li>Litecoin can be Swapped for Bitcoin, Ethereum</li>
  <li>USDT can be Swapped for only ERC20 Tokens</li>
  <li>ERC20 Tokens can be Swapped for Bitcoin or USDT</li>
  
  <h4>What are Atomic Swaps? Explained in Simple English</h4>
  <iframe width="560" height="315" src="https://www.youtube.com/embed/fh-i8lVhN9o" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  
  <h4>Atomic Swaps Explained in 3 Mins</h4>
  <iframe width="560" height="315" src="https://www.youtube.com/embed/WkXUz3UFn6Y" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  
  </section>
)

export default connect(state => ({
  address: state.user.ethData.address,
}))(About)
