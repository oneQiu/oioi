import { Fragment } from 'react';
import Providers from '@/layout/Providers';

export const RootLayout: RFC = ({ children }) => {
  return (
    <Fragment>
      <Providers>{children}</Providers>
    </Fragment>
  );
};
