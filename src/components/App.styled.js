import styled from '@emotion/styled';

export const Main = styled.div`
  width: 100%;
  height: auto;
  background-color: #0e0e2c;
  padding-top: 20px;
  padding-bottom: 60px;
`;

export const Container = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 320px) {
    width: 320px;
  }

  @media screen and (min-width: 768px) {
    padding-left: 32px;
    padding-right: 32px;
    width: 768px;
  }

  @media screen and (min-width: 1280px) {
    padding-left: 16px;
    padding-right: 16px;
    width: 1280px;
  }
`;
