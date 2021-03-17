import "../styles/globals.css";
import { Provider, teamsTheme } from "@fluentui/react-northstar";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Provider theme={teamsTheme}>
        <header>
          <title>Fluent UI Prototype by RG</title>
        </header>
        <Component {...pageProps} />
      </Provider>
    </div>
  );
}

export default MyApp;
