import { SafeAreaView } from 'react-native-safe-area-context';
import Homescreen from './Screens/homescreen';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Homescreen />
    </SafeAreaView>
  );
}
