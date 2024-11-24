import { Outlet, createRootRoute } from '@tanstack/react-router';
import { Fragment } from 'react';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

export const Route = createRootRoute({
  component: RootComponent,
  notFoundComponent: NotFound
});

function NotFound() {
  return <div>404</div>;
}

function RootComponent() {
  return (
    <Fragment>
      <div>Hello Root</div>
      <Outlet />
      <TanStackRouterDevtools position={'bottom-right'} />
    </Fragment>
  );
}
