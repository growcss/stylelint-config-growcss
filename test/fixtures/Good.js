import React from 'react';
import styled from 'styled-components';

const something = 'background';

export const Good = styled.div`
  display: inline-flex;
  margin: 0 -2px;
  ${something/* sc-prop */}: papayawhip;

  .ListingCard {
    background: pink;
  }

  .ListingCard--featured {
    background: pink;
  }

  .ListingCard__title {
    background: pink;
  }

  .ListingCard__content--alternative {
    background: pink;
  }
`;
