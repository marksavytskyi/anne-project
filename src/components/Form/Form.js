import { Link } from '@mui/material';

import * as React from 'react';
import Button from '@mui/material/Button';
import styled from 'styled-components';

const BasicButtons = () => {
  const SubmitButton = styled(Button)`
    width: 100%;

    @media (min-width: 768px) {
      width: 300px;
    }
  `;

  const formUrl =
    'https://docs.google.com/forms/d/e/1FAIpQLSfQdVD26DnjU8hahfe762JR5WMG1fUVabjKOG6E_1sahMjs0Q/viewform?usp=sf_link';
  return (
    <Link href={formUrl} target="_blank" rel="noopener">
      <SubmitButton variant="contained">REGISTER</SubmitButton>
    </Link>
  );
};

export default BasicButtons;
