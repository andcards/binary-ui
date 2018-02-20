import {
  BINARY_COLOR_BLUE_40,
  BINARY_COLOR_RED_40,
  BINARY_COLOR_YELLOW_50,
} from 'binary-ui-styles';
import styled from 'styled-components';
import { CONFIRM, PRIORITY, CRITICAL } from '../../constants/alert-types';

export default styled.div`
  border-radius: 5px;
  box-shadow: 0px 0px 3px 0px rgba(128, 128, 128, 0.5);
  cursor: default;
  display: flex;
  flex-direction: row;
  margin: 3px auto 0 auto;
  padding: 0 5px;
  user-select: none;
  width: fit-content;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-touch-callout: none;
  ${props => {
    switch (props.alertType) {
      case CONFIRM:
        return `background: ${BINARY_COLOR_BLUE_40};color: white;`;
      case PRIORITY:
        return `background: ${BINARY_COLOR_YELLOW_50};color: black;`;
      case CRITICAL:
        return `background: ${BINARY_COLOR_RED_40};color: white;`;
      default:
        return `background: ${BINARY_COLOR_BLUE_40};color: white;`;
    }
  }};
`;
