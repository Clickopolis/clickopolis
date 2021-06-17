import * as React from 'react';

import { colors } from 'utils';
import { Screen } from 'components/Screen';
import { Indicator } from 'components/Indicator';
import { Button } from 'components/Button';
import { Resource } from 'interfaces';

import './SettingsScreen.scss';

export interface SettingsScreenProps {}

export function SettingsScreen(props: SettingsScreenProps) {
  return (
    <Screen type="Settings" color={colors.get('settings')}>
      <div className="settings-block">
        <span>General</span>
      </div>
      <div className="settings-block">
        <span>Saves</span>
      </div>
    </Screen>
  );
}
