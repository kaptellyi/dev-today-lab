import React, { FC } from 'react';
import styled from 'styled-components';

const ErrorMsg = styled.p`
  color: crimson;
`;

const Error: FC<{ msg?: string }> = ({ msg }) => {
  return <ErrorMsg>{msg || 'Something went wrong'}</ErrorMsg>;
};

export default Error;
