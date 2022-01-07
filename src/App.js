import { AppRouter } from "./routers/AppRouter";
import { store } from "./store/store";
import { Provider } from "react-redux";

function App() {
  return (
    <div >
      {/* <LoginScreen></LoginScreen> */}
      {/* <WelcomeScreen></WelcomeScreen> */}
      {/* <GoodbyeScreen></GoodbyeScreen> */}
      {/* <QuestionBoard></QuestionBoard> */}
      <Provider store={store}>
			<AppRouter />
		</Provider>
    </div>
  );
}

export default App;
