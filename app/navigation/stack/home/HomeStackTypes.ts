import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import type {RouteProp} from '@react-navigation/native';
// navigator params check
export type HomeStackNavigatorParamList = {
  home: undefined;
};

//useNavigation
export type HomeScreenNavigationProp = NativeStackNavigationProp<
  HomeStackNavigatorParamList,
  'home'
>;
