import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import styled from "styled-components/native"

export const UpdateCheckContainer = styled(KeyboardAwareScrollView)`
  background-color: ${({ theme }) => theme.colors.background };
  height: 100%;
`;