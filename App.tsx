import Home from './src';
import { StatusBar } from 'react-native';

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" translucent backgroundColor="transparent"  />
      <Home/>
    </>
  );
}
