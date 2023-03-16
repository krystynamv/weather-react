import "./styles.css";
import Temperature from "./Temperature";

export default function App() {
  return (
    <div className="container">
      <div className="weather-app-wrapper">
        <div className="weather-app">
          <Temperature />
        </div>
        <span class="code-by">
          <a
            href="https://github.com/krystynamv/weather-react"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code
          </a>{" "}
          by Krystyna Moiseieva
        </span>
      </div>
    </div>
  );
}
