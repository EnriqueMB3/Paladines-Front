import React from 'react'


export const PageNotFound = ({ location }) => (
    <p>
      Page not found - the path, <code>{location.pathname}</code>, did not match
      any React Router routes.
    </p>
  );