import PropTypes from 'prop-types';
import React from 'react';
import TextContent from '../components-styled/TextContent';
import TextWrapper from '../components-styled/TextWrapper';
import ActionListItemIcon from '../../ActionListItemIcon';

const propTypes = {
  children: PropTypes.any,
  isBold: PropTypes.bool,
  isEdit: PropTypes.bool,
  renderIcon: PropTypes.func,
  onMoreClick: PropTypes.func,
};

const defaultProps = {
  children: undefined,
  isEdit: false,
  isBold: false,
  renderIcon: undefined,
  onMoreClick: undefined,
};

export default class Text extends React.Component {

  constructor(props) {
    super(props);
    this.onMoreClick = this.onMoreClick.bind(this);
  }

  onMoreClick() {
    const { onMoreClick } = this.props;
    if (!onMoreClick) {
      return;
    }
    onMoreClick();
  }

  render() {
    const { children, isBold, isEdit, renderIcon } = this.props;
    return (
      <TextWrapper isEdit={isEdit} >
        <TextContent isBold={isBold} >
          {children}
        </TextContent>
        {renderIcon && (
          <ActionListItemIcon renderIcon={renderIcon} onClick={this.onMoreClick} />
        )}
      </TextWrapper>
    );
  }
}

Text.propTypes = propTypes;
Text.defaultProps = defaultProps;
