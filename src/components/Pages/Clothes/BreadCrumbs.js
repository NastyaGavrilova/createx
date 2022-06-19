import React from "react";
import { Link } from "react-router-dom";
import withBreadcrumbs from "react-router-breadcrumbs-hoc";

const PureBreadcrumbs = ({ breadcrumbs }) => (
  <div className="c-breadcrumbs">
    {breadcrumbs.map(({ breadcrumb, match }, index) => (
      <div className="c-breadcrumbs__item" key={match.url}>
        <Link to={match.url || ""}>{breadcrumb}</Link>
        {index < breadcrumbs.length - 1 && ">"}
      </div>
    ))}
  </div>
);

export default withBreadcrumbs()(PureBreadcrumbs);
