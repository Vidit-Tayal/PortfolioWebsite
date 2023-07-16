import * as React from 'react';
import Switch from '@mui/material/Switch';
import { FormControlLabel } from '@mui/material';

export default function SwitchLabels() {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <FormControlLabel control={<Switch />} label="vs BOT" />
  );
}