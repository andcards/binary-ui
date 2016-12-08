import autobind from 'autobind-decorator';
import React from 'react';
import SwitchToggle from '../components-styled/SwitchToggle';
import SwitchContainer from '../components-styled/SwitchContainer';
import SwitchBackground from '../components-styled/SwitchBackground';
import SwitchHandler from '../components-styled/SwitchHandler';
import ListItemContents from '../../ListItemContents';
import {
  TouchableOpacity,
} from 'react-native';

const propTypes = {
  isChecked: React.PropTypes.bool.isRequired,
  onChange: React.PropTypes.func.isRequired,
};

const defaultProps = {
  isChecked: false,
};

export default class Switch extends React.Component {

  @autobind
  onClick() {
    const { isChecked, onChange } = this.props;
    if (onChange) {
      const isCheckedNew = !isChecked;
      onChange(isCheckedNew);
    }
  }

  render() {
    const { isChecked } = this.props;
    return (
      <ListItemContents isEdit={false} >
        <SwitchToggle>
          <SwitchContainer onClick={this.onClick} >
            <SwitchBackground isChecked={isChecked} />
            <SwitchHandler isChecked={isChecked} />
          </SwitchContainer>
        </SwitchToggle>
      </ListItemContents>
    );
  }
}

Switch.defaultProps = defaultProps;
Switch.propTypes = propTypes;
