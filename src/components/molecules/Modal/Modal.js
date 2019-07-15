import React, { Component } from 'react'

import Button from 'components/atoms/Button'

class Modal extends Component {
  onClose = () => {
    const { item, onClose } = this.props

    if (item.onClose) {
      item.onClose()
      onClose()
    } else {
      onClose()
    }
  }

  onConfirm = () => {
    const { item, onClose } = this.props
    if (item.onConfirm) {
      item.onConfirm()
      onClose()
    }
  }

  render() {
    const { zIndex, item } = this.props

    switch (item.type) {
      case 'confirmation':
        return (
          <div style={{ zIndex: (zIndex + 1) * 10 }}>
            <div>
              <div>{item.content.text}</div>
              <div>
                <Button onClick={this.onConfirm}>Confirm</Button>
                <Button onClick={this.onClose}>Close</Button>
              </div>
            </div>
          </div>
        )

      default:
        return null
    }
  }
}

Modal.defaultProps = {
  zIndex: 10,
}

export default Modal
