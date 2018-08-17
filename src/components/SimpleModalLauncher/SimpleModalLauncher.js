import React, { Component } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import SimpleModal from '../SimpleModal/SimpleModal';

class SimpleModalLauncher extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
  }

  handleToggleModal() {
    this.setState({ showModal: !this.state.showModal });
  }

  render() {
    const { buttonLabel, children } = this.props;
    const { showModal } = this.state;

    return (
      <div>
        <button
          type="button"
          onClick={() => this.handleToggleModal()}
        >
          {buttonLabel}
        </button>

        {showModal &&
          <SimpleModal onCloseRequest={() => this.handleToggleModal()}>
            {children}
          </SimpleModal>}
      </div>
    );
  }
}

SimpleModalLauncher.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  sheet: PropTypes.object,
  classes: PropTypes.object,
};

export default injectSheet()(SimpleModalLauncher);