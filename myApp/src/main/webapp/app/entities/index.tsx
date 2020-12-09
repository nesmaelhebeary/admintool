import React from 'react';
import { Switch } from 'react-router-dom';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import A from './admintool/a';
import B from './admintool/b';
import C from './admintool/c';
import D from './admintool/d';
/* jhipster-needle-add-route-import - JHipster will add routes here */

const Routes = ({ match }) => (
  <div>
    <Switch>
      {/* prettier-ignore */}
      <ErrorBoundaryRoute path={`${match.url}a`} component={A} />
      <ErrorBoundaryRoute path={`${match.url}b`} component={B} />
      <ErrorBoundaryRoute path={`${match.url}c`} component={C} />
      <ErrorBoundaryRoute path={`${match.url}d`} component={D} />
      {/* jhipster-needle-add-route-path - JHipster will add routes here */}
    </Switch>
  </div>
);

export default Routes;
