import styled from 'styled-components';
import { CONFIRM, PRIORITY, CRITICAL } from '../../constants/alert-types';

export default styled.Text`
  font-family: ${props => props.theme.fontFamily400};
  font-size: 14px;
  font-weight: ${props => props.theme.fontWeight400};
  padding: 6px 5px 5px 5px;
  ${props => {
    switch (props.alertType) {
      case CONFIRM:
        return 'color: #FFFFFF;';
      case PRIORITY:
        return 'color: #000000;';
      case CRITICAL:
        return 'color: #FFFFFF;';
      default:
        return 'color: #FFFFFF;';
    }
  }};
`;
