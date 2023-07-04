import * as React from 'react';
import Typography from '@mui/material/Typography';
import AtomLink from '@/app/atoms/Link/page';

function preventDefault(event) {
  event.preventDefault();
}

export default function Deposits() {
  return (
    <React.Fragment>
      <Typography component="h2" variant="h6" color="primary" gutterBottom>
        Recent Deposits
      </Typography>
      <Typography component="p" variant="h4">
        $3,024.00
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        on 15 March, 2019
      </Typography>
      <div>
        <AtomLink color="primary" href="#" onClick={preventDefault}>
          View balance
        </AtomLink>
      </div>
    </React.Fragment>
  );
}