import React from 'react';
import { Typography } from '@mui/material';

export default function BulletPoints(array) {
  return (
    <div style={{ padding: 8 }}>
      {array.map((item) => {
        return <Typography>{`• ${item}`}</Typography>;
      })}
    </div>
  );
}
