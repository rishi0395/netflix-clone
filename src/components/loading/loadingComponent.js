import React from 'react';
import {
  LockBody,
  Picture,
  ReleaseBody,
  Spinner
} from './styles/loadingStyles';

function Loading({ src, ...restProps }) {
  return (
    <Spinner {...restProps}>
      <LockBody />
      <Picture src={`/images/users/${src}.png`}></Picture>
    </Spinner>
  );
}

Loading.ReleaseBody = function LoadingReleaseBody() {
  return <ReleaseBody />;
};

export default Loading;
