import { BINARY_COLOR_BLUE_40, BINARY_COLOR_GRAY_80, LIST_ITEM_HEIGHT } from 'binary-ui-styles';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { LIST_ITEM_HALF_HEIGHT } from '../../../utils/styles.universal';

const SWITCH_BACKGROUND_STYLE = `
  border-radius: ${LIST_ITEM_HALF_HEIGHT}px;
  height: ${LIST_ITEM_HALF_HEIGHT}px;
  position: absolute;
  top: 0px;
  transition: .25s ease-in-out;
  width: ${LIST_ITEM_HEIGHT}px;
`;

const SWITCH_BACKGROUND_CHECKED_STYLE = {
  backgroundColor: BINARY_COLOR_BLUE_40,
};

const SWITCH_BACKGROUND_UNCHECKED_STYLE = {
  backgroundColor: BINARY_COLOR_GRAY_80,
};

const SwitchBackgroundBase = styled.div`
  ${SWITCH_BACKGROUND_STYLE}
`;

const propTypes = {
  isChecked: PropTypes.bool.isRequired,
};

const defaultProps = {};

const SwitchBackground = ({ isChecked }) => {
  const style = isChecked ? SWITCH_BACKGROUND_CHECKED_STYLE : SWITCH_BACKGROUND_UNCHECKED_STYLE;
  return (
    <SwitchBackgroundBase style={style} />
  );
};

SwitchBackground.defaultProps = defaultProps;
SwitchBackground.propTypes = propTypes;

export default SwitchBackground;
