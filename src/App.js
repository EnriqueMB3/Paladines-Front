import { AppRouter } from "./routers/AppRouter";
import { store } from "./store/store";
import { Provider } from "react-redux";

function App() {
 
  return (
    <div >
      <Provider store={store}>
			<AppRouter basemname={`/${process.env.PUBLIC_URL}`} />
		</Provider>
    </div>
  );
}

export default App;
