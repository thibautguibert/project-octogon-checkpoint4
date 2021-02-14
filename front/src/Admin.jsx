import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import { AdminHome } from "./Thibaut/AdminHome";
import { AdminHeader } from "./Thibaut/AdminHeader";
import { CreateType } from "./Thibaut/CreateType";
import { CreateRapper } from "./Thibaut/CreateRapper";
import ModifRapper from "./hugo/ModifRapper";
import { ModifyType } from "./Thibaut/ModifyType";

export const Admin = () => {
  const { path } = useRouteMatch();
  return (
    <>
      <AdminHeader />
      <Switch>
        <Route exact path={`${path}/`} component={AdminHome} />
        <Route path={`${path}/create-type`} component={CreateType} />
        <Route path={`${path}/modify-type`} component={ModifyType} />
        <Route path={`${path}/create-rapper`} component={CreateRapper} />
        <Route path={`${path}/modify-rapper`} component={ModifRapper} />
      </Switch>
    </>
  );
};
