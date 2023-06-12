import React from "react";

interface IRouteWithLayout {
  component: React.ComponentType<any>;
  layout: React.ComponentType<any>;
}

const RouteWithLayout: React.FC<IRouteWithLayout> = (props) => {
  const { layout: Layout, component: Component } = props;
  return (
    <Layout>
      <Component />
    </Layout>
  );
};

export default RouteWithLayout;
