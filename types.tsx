/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { CompositeScreenProps, NavigatorScreenParams, ParamListBase } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Checklist } from './src/app/services/dtos/Checklist.dtos';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  'checklist/List': undefined;
  'checklist/Create': undefined;
  'checklist/Update': DetailsPageParams;
  'checklist/Details': DetailsPageParams;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  Screen
>;

interface DetailsPageParams {
  data: Checklist;
}