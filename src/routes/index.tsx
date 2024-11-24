import { createFileRoute, Link } from '@tanstack/react-router';
import { Fragment } from 'react';

export const Route = createFileRoute('/')({
  component: RouteComponent
});

function RouteComponent() {
  return (
    <Fragment>
      <Link to="/database">Database</Link>
    </Fragment>
  );
}
