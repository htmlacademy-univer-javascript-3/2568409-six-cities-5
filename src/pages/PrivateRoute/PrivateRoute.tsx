import React from 'react';
import {Navigate} from 'react-router-dom';
import {AppRoute} from '../../types.ts';
import {useAppSelector} from '../../store/hooks.ts';

type AuthorizedRouteProps = {
  children: JSX.Element;
}

export const PrivateRoute: React.FC<AuthorizedRouteProps> = ({children}) => {
  const isAuthenticated = useAppSelector((state) => state.authorizationStatus);
  return isAuthenticated ? children : <Navigate to={AppRoute.Login}/>;
};
