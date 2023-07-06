import styled from '@emotion/styled';

export const Main = styled.div`
  background-color: #0e0e2c;
  padding-top: 20px;
  padding-bottom: 60px;
`;

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 20px;
  max-width: 1280px;

  @media screen and (min-width: 320px) {
    min-width: 320px;
    max-width: 480px;
  }

  @media screen and (min-width: 768px) {
    padding-left: 32px;
    padding-right: 32px;
    min-width: 768px;
  }

  @media screen and (min-width: 1280px) {
    padding-left: 16px;
    padding-right: 16px;
    width: 1280px;
  }
`;
