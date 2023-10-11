import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";

const WithRouter = (component: () => React.ReactNode) => function withRouter() {
  return (
    <BrowserRouter>
      <Suspense fallback="Loading...">{component()}</Suspense>
    </BrowserRouter>
  );
};

export default WithRouter;
