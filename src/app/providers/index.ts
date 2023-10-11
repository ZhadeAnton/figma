import compose from "compose-function";
import { observer } from "mobx-react-lite";
import WithRouter from "./with-router";
import WithContainer from "./with-container";
import WithTheme from "./MUI/with-theme";

const WithProviders = compose(observer, WithRouter, WithContainer, WithTheme);

export default WithProviders;
