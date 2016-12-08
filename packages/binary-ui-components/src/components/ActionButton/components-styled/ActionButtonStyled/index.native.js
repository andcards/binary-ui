import React from 'react';
import styled from 'styled-components/native';
import {
  CARDS_BUTTON_STYLE_NATIVE,
  CARDS_ICON_STYLE_ACTIVE_EXT_EXT,
  CARDS_ICON_STYLE_HOVER_EXT_EXT,
  CARDS_ICON_STYLE_DISABLED_EXT_EXT,
} from '../../../../utils/styles';

export const RESET_BUTTON_STYLES = `
  color: inherit;
  padding: 0;
`;

/*
  background: none;
  border: 0;
  box-sizing: content-box;
  font: inherit;
  line-height: normal;
  outline: 0;
*/

const StyledView = styled.View`
`;

const ActionButtonStyled = styled.TouchableOpacity`
  ${RESET_BUTTON_STYLES}
  ${CARDS_BUTTON_STYLE_NATIVE}
  ${props => (props.isDisabled
    ? CARDS_ICON_STYLE_DISABLED_EXT_EXT
    : `
      ${CARDS_ICON_STYLE_ACTIVE_EXT_EXT}
      ${CARDS_ICON_STYLE_HOVER_EXT_EXT}
    `)
  }
`;

const propTypes = {
  onClick: React.PropTypes.func,
  children: React.PropTypes.any,
  isDisabled: React.PropTypes.bool,
};

const defaultProps = {
  isDisabled: false,
};

// TODO: make hover separetely
const ActionButton = ({ isDisabled, onClick, children, ...props }) => (
  <ActionButtonStyled disabled={isDisabled} onPress={onClick} {...props} >
    <StyledView {...props} >
      {children}
    </StyledView>
  </ActionButtonStyled>
);

ActionButton.propTypes = propTypes;
ActionButton.defaultProps = defaultProps;

export default ActionButton;
