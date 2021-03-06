import infoAddon from "@storybook/addon-info";
import { setAddon, storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";
import React from "react";
import styled, { ThemeProvider } from 'styled-components';

import IconWarning from "binary-ui-icons/binary/Warning";
import IconOrganizationDisconnected from "binary-ui-icons/binary/OrganizationDisconnected";
import Alert, { ALERT_TYPES } from "binary-ui-components/mobile/Alert";
import Spinner from "binary-ui-components/mobile/Spinner";
import { THEME_MAIN } from 'binary-ui-styles';

setAddon(infoAddon);

storiesOf("binary-ui-components/mobile", module).add(
  "Alert",
  withInfo("Alert component")(() => (
    <ThemeProvider theme={THEME_MAIN} >
      <div>
        <Alert text="Alert type CONFIRM" type={ALERT_TYPES.CONFIRM} />
        <Alert
          text="Alert type PRIORITY"
          type={ALERT_TYPES.PRIORITY}
          renderIconRight={() => <IconOrganizationDisconnected color="hsl(0, 0%, 0%)" />}
        />
        <Alert
          text="Alert type CRITICAL"
          type={ALERT_TYPES.CRITICAL}
          renderIconLeft={() => <IconWarning color="#ffffff" />}
        />
        <Alert
          text="Reconnecting to internet..."
          type={ALERT_TYPES.CRITICAL}
          renderIconLeft={() => <Spinner color="#ffffff" />}
        />
      </div>
    </ThemeProvider>
  ))
);
