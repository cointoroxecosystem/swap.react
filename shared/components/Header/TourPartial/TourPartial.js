import React, { Component } from 'react'

import { FormattedMessage } from 'react-intl'
import Tour from 'reactour'


export default class TourPartial extends Component {

  state = {
    shouldTourOpen: false,
  }

  componentDidUpdate(prevProps) {
    if (this.props.isTourOpen !== prevProps.isTourOpen) {
      this.isShouldTourOpen()
    }
  }

  isShouldTourOpen = () => {

    this.setState(() => ({
      shouldTourOpen: true,
    }))
  }

  closeTour = () => {
    this.setState({ shouldTourOpen: false })
  }

  render() {
    const accentColor = '#510ed8'

    return (
      <Tour
        steps={tourSteps}
        onRequestClose={this.closeTour}
        isOpen={this.state.shouldTourOpen}
        maskClassName="mask"
        className="helper"
        accentColor={accentColor}
      />
    )
  }
}
/* eslint-disable */
const tourSteps = [
  {
    selector: '[data-tut="have"]', //have currency
    content: <FormattedMessage id="tourPartial94" defaultMessage="Please select the currency & enter the amounts to sell." />,
  },
  {
    selector: '[data-tut="get"]',
    content: <FormattedMessage id="tourPartial99" defaultMessage="Please select the currency & enter the amounts to buy." />,
  },
  {
    selector: '[data-tut="status"]',
    content: <FormattedMessage
      id="tourPartial103"
      defaultMessage="You can view all exchange offers here. When loading there will be `Searching orders...` shown. You can check the exchange rates here when a matching order is found." />,
  },
  {
    selector: '[data-tut="togle"]',
    content: <FormattedMessage id="tourPartial107" defaultMessage="This button allows you to receive exchanged funds directly to your AtomicSwapWallet.io wallet or external wallets." />,
  },
  {
    selector: '[data-tut="Exchange"]',
    content: <FormattedMessage
      id="tourPartial116"
      defaultMessage="This button allows you to access the direct URL of the exchange operation. This is possible when the button is shown in pink." />,
  },
  {
    selector: '[data-tut="Orderbook"]',
    content: <FormattedMessage
      id="tourPartial128"
      defaultMessage="Click on this button to see the page with offers for exchange. Offers will be presented for the particular currency you have selected. You can also create your own offers." />,
  },
]

/* eslint-enable */
