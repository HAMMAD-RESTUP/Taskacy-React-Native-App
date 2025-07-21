import store from "./Redux/store/store";
import StackNavigation from "./config/stacknavigation";

import { Provider } from "react-redux";
import Toast from 'react-native-toast-message';

export default function App() {

  return <>
  <Provider store={store}>
    <StackNavigation />
    <Toast/>

   

  </Provider>
  </>
}