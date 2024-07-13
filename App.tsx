import Login from './src/Login'
import { NativeBaseProvider, StatusBar } from 'native-base';
import { THEME } from './src/styles/themes';
import Register from './src/Register';
export default function App() {
  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar backgroundColor={THEME.colors.gray[200]} />
      <Register />
    </NativeBaseProvider >

  );

}
