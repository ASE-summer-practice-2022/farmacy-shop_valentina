import { observer } from "mobx-react";
import React from "react";
import { Navigate } from "react-router-dom";

import { useStore } from "../../hooks";

interface IProtectedRouteProps {
  children: React.ReactElement;
}

function ProtectedRoute({ children }: IProtectedRouteProps) {
  const { userStore } = useStore();

  if (!userStore.isAuthorized) return <Navigate to="/" />;
  return children;
}

export default observer(ProtectedRoute);
