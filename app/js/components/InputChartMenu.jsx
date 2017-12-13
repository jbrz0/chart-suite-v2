import React from 'react';
import PropTypes from 'prop-types';

export default class InL extends React.Component {
  render() {
    return (
      <input
        type="text"
        value={this.props.val}
        placeholder={this.props.ph}
        onChange={this.props.onC}
        className="chartEditorInput chartEditorInputLeft"
      />
    );
  }
}

InL.propTypes = {
  val: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  // onC: PropTypes.number,
  onC: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  ph: PropTypes.string,
};

InL.defaultProps = {
  val: 0,
  onC: 0,
  ph: 'test',
};
