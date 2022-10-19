export type HomeStackNavigatorParamList = {
  home: undefined;
};

export type BottomTabNavigatorParamList = {
  home: HomeStackNavigatorParamList;
  favorite: undefined;
  cart: undefined;
  notifycation: undefined;
  profile: undefined;
};
