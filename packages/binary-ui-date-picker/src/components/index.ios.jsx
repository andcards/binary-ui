import Button from 'binary-ui-components/mobile/Button';
import Group from 'binary-ui-components/mobile/Group';
import IconArrowDown from 'binary-ui-icons/binary/ArrowDown';
import padStart from 'lodash/padStart';
import PropTypes from 'prop-types';
import React from 'react';
import { LayoutAnimation } from 'react-native';
import DatePickerIOS from '../components-styled/DatePickerIOS/index.ios';

const propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  formatDate: PropTypes.func,
  isDisabled: PropTypes.bool,
  isValid: PropTypes.bool,
  locale: PropTypes.string,
  maximumDate: PropTypes.instanceOf(Date),
  minimumDate: PropTypes.instanceOf(Date),
  onChange: PropTypes.func,
  onOpen: PropTypes.func,
  renderLeft: PropTypes.func,
};

const defaultProps = {
  formatDate: (date) => (
    `${date.getFullYear()}-${padStart(date.getMonth() + 1, 2, '0')}-${padStart(date.getDate(), 2, '0')}`
  ),
  isDisabled: false,
  isValid: true,
  locale: undefined,
  maximumDate: undefined,
  minimumDate: undefined,
  onChange: () => {},
  onOpen: () => {},
  renderLeft: () => null,
};

/**
 * DatePickerIOS: https://facebook.github.io/react-native/docs/datepickerios.html
 */
class DatePicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
    };
    this.onDateChange = this.onDateChange.bind(this);
    this.onPress = this.onPress.bind(this);
    this.close = this.close.bind(this);
  }

  onDateChange(date) {
    const { onChange } = this.props;
    onChange(date);
  }

  onPress() {
    const { onOpen } = this.props;
    const { isVisible } = this.state;
    const isVisibleNew = !isVisible;
    this.animate();
    this.setState(() => ({
      isVisible: isVisibleNew,
    }));
    if (isVisibleNew) {
      onOpen();
    }
  }

  animate() {
    LayoutAnimation.configureNext({
      duration: 250,
      create: {
        type: LayoutAnimation.Types.easeInEaseOut,
        property: LayoutAnimation.Properties.opacity,
      },
      update: {
        type: LayoutAnimation.Types.easeInEaseOut,
        property: LayoutAnimation.Properties.opacity,
      },
      delete: {
        type: LayoutAnimation.Types.easeInEaseOut,
        property: LayoutAnimation.Properties.opacity,
      },
    });
  }

  close() {
    this.animate();
    this.setState(() => ({
      isVisible: false,
    }));
  }

  render() {
    const {
      date,
      formatDate,
      isDisabled,
      isValid,
      locale,
      maximumDate,
      minimumDate,
      renderLeft,
      ...props,
    } = this.props;
    const { isVisible } = this.state;
    return (
      <React.Fragment>
        <Group
          renderLeft={renderLeft}
          renderRight={() => (
            <Button
              {...props}
              isDisabled={isDisabled}
              isValid={isValid}
              label={formatDate(date)}
              onPress={this.onPress}
              renderIcon={rest => <IconArrowDown {...rest} />}
            />
          )}
        />
        {isVisible ? (
          <DatePickerIOS
            date={date}
            locale={locale}
            maximumDate={maximumDate}
            minimumDate={minimumDate}
            mode="date"
            onDateChange={this.onDateChange}
          />
        ) : null}
      </React.Fragment>
    );
  }
}

DatePicker.propTypes = propTypes;
DatePicker.defaultProps = defaultProps;

export default DatePicker;
