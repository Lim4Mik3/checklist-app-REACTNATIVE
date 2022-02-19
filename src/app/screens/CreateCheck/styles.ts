import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const CreateCheckContainer = styled(KeyboardAwareScrollView)`
  background-color: ${({ theme }) => theme.colors.background };
  height: 100%;
`;

export const FormContainer = styled.View`
  height: 100%;
  background-color: #fafafa;
  border-top-left-radius: ${RFValue(30)}px;
  border-top-right-radius: ${RFValue(30)}px;
  padding: ${RFValue(8)}px ${RFValue(8)}px ${RFValue(24)}px;
`;

export const FormContainerTitle = styled.Text`
  padding: ${RFValue(24)}px ${RFValue(12)}px ;
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.text_secondary };
`;

export const FormWrapper = styled.View`

`;

export const FormFooter = styled.View`
  margin-top: auto;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const TwoColuns = styled.View`
  flex-direction: row;
  justify-content: space-around;
`;

export const FormOption = styled.View`
  flex: 0.3;
  align-items: center;
  padding: ${RFValue(12)}px 0;
`;

export const SupervisorTitle = styled.Text`
  font-size: 15px;
  color: #29292e;
  margin-right: 8px;
`;

export const FormGroup = styled.View`
  align-items: center;
  flex-direction: row;
  padding-bottom: 24px;
`;