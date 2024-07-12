import Login from './src/Login'
import { NativeBaseProvider , StatusBar } from 'native-base';
import {THEME} from './src/styles/themes';
export default function App() {
  return (
  <NativeBaseProvider theme={THEME}>
      <StatusBar  backgroundColor={THEME.colors.gray[200]} />
      <Login/>
  </NativeBaseProvider>

  );

}
