import { AppRouter } from "./routers/AppRouter";
import { store } from "./store/store";
import { Provider } from "react-redux";

function App() {
 
  return (
    <div >
      <Provider store={store}>
			<AppRouter  />
		</Provider>
    </div>
  );
}

export default App;
