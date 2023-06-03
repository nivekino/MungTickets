import "./App.css";
import AppRouter from "./routes/AppRouter";
import { EventProvider } from "./context/EventProvider";

function App() {
  return (
    <EventProvider>
      <AppRouter />
    </EventProvider>
  );
}

export default App;
