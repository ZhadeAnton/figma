import compose from "compose-function";
import WithRouter from "./with-router";
import WithContainer from "./with-container";
import WithTheme from "./MUI/with-theme";

const WithProviders = compose(WithRouter, WithContainer, WithTheme);

export default WithProviders;
