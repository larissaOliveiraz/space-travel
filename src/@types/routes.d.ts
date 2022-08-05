declare namespace ReactNavigation {
  export interface RootParamList extends RootStackParamList {
    Home: NavigationStackProp<string>;
    Destinations: NavigationStackProp<string>;
  }
}
