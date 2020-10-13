import React from 'react';
import { BUTTON } from 'common';
import Button from 'components/atoms/Button';
import { getEquivalentHeight } from 'helpers/screen';
import { Image, Text, View } from 'react-native';
import SignInForm, { ISignInFormOnSubmit } from './SignInForm';
import ThemedText from 'components/molecules/ThemedText';
import Spacer from 'components/atoms/Spacer';

export const signUpImageLogoTestID = "signUpImageLogoTestID";
export const signUpImageLogoPath = "images/logo-2x2.jpg";
export const signUpButtonFacebookTitle = "FACEBOOK";
export const signUpButtonGoogleTitle = "GOOGLE";

export const signUpTestID = "signUpTestID";

const SignUp = () => {
    // const navigation = useNavigation();
    return (
        <View style={{
            padding: 40,
            backgroundColor: "#4ebdad",
            height: "100%"
        }}
        testID={signUpTestID}
        >
            <View style={{
                alignItems: "center",
            }}>
                <Image
                    style={{
                        height: getEquivalentHeight(10),
                        width: getEquivalentHeight(10)
                    }}
                    source={require('images/logo-2x2.jpg')}
                    testID={signUpImageLogoTestID}
                />
            </View>
            <Spacer height={7} />
            <View style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between"
            }}>
                <View style={{
                    width: "47%",
                }}>
                    <Button title={signUpButtonFacebookTitle} _type={BUTTON.ROUNDED_FACEBOOK} />
                </View>
                <View style={{
                    width: "47%",
                }}>
                    <Button title={signUpButtonGoogleTitle} _type={BUTTON.ROUNDED_GOOGLE} />
                </View>
            </View>
            <View style={{
                alignItems: "center"
            }}>
                <Spacer height={6} />
                <ThemedText>OR</ThemedText>
                <Spacer height={6} />
            </View>
            <SignInForm onSubmit={(event: ISignInFormOnSubmit) => {
                console.log("event: ", event);
            }} />
            <Spacer height={4} />
            <Button title={"Forgot Your Password?"} />
            <Spacer height={4} />
            <Button title={"No account? Register Now"} _type={BUTTON.ROUNDED_WHITE} />
        </View>
    )
};

export default SignUp