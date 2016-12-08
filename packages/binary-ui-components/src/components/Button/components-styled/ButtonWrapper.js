import { NO_SELECT_CSS } from 'binary-ui-styles/web';
import styled from 'styled-components';
import { CURSOR_POINTER_STYLE_EXT, LIST_ITEM_CONTENTS_BASE_STYLE_WEB } from '../../../utils/styles';

export default styled.div`
  ${NO_SELECT_CSS}
  ${LIST_ITEM_CONTENTS_BASE_STYLE_WEB}
  ${CURSOR_POINTER_STYLE_EXT}
`;
