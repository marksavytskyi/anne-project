import styled from '@emotion/styled';

export const OfferWrapper = styled.div`
  ${props => props.theme.breakpoints.up('md')} {
    /* Styles for medium and larger screens */
    display: flex;
  }
`;

export const DescWrapper = styled.div`
  text-align: center;
`;

export const Title = styled.h1`
  color: #fff;
  text-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  font-weight: 700;
  line-height: 130%;
  letter-spacing: 3px;
  text-transform: uppercase;

  ${props => props.theme.breakpoints.down('sm')} {
    /* Styles for small screens */
    font-size: 24px;
    margin-bottom: 24px;
  }

  ${props => props.theme.breakpoints.up('md')} {
    /* Styles for medium and larger screens */
    font-size: 62px;
    margin-bottom: 32px;
  }
`;

export const Subtitle = styled.p`
  color: #868695;
  /* Normal Text - 16pt - Regular */
  font-size: 16px;
  font-weight: 400;
  line-height: 180%;
  letter-spacing: 1px;
`;

export const Input = styled.input`
  width: 480px;
  height: 60px;
`;

export const Button = styled.button``;

// export const ImageWrapper = styled.div`
//   ${props => props.theme.breakpoints.down('md')} {
//     /* Styles for medium and larger screens */
//     display: none;
//   }
//   ${props => props.theme.breakpoints.up('md')} {
//     width: 300px; /* Sets the width of the image to 100% of its container */
//     height: auto; /* Maintains the image's aspect ratio */
//     border-radius: 4px; /* Adds a border-radius for rounded corners */
//     box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1); /* Adds a box shadow for a subtle effect */
//   }
// `;

// export const Image = styled.img`
//   display: block;
//   width: 100%; /* Set the width of the image to fill its container */
//   height: auto; /* Maintain the image's aspect ratio */
// `;
