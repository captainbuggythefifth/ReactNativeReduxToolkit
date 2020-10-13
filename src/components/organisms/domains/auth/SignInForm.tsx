import React, { useState } from 'react'
import Input from 'components/atoms/Input';
import Button from 'components/atoms/Button';
import { BUTTON, THEME } from 'common';
import Spacer from 'components/atoms/Spacer';

export const signInFormInputEmailPlaceholder = "email";
export const signInFormInputPasswordPlaceholder = "password";
export const signInFormButtonLogInText = "LOGIN";

export interface ISignInFormOnSubmit {
    email: string,
    password: string
}

interface ISignInFormProps {
    onSubmit: (event: ISignInFormOnSubmit) => void // ((event: GestureResponderEvent) => void) | undefined
}

const SignInForm = ({onSubmit}: ISignInFormProps) => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    return (
        <>
            <Input placeholder={signInFormInputEmailPlaceholder} onChangeText={setEmail} />
            <Spacer />
            <Input placeholder={signInFormInputPasswordPlaceholder} onChangeText={setPassword} secureTextEntry={true} />
            <Spacer height={4} />
            <Button title={signInFormButtonLogInText} _type={BUTTON.ROUNDED_ROYALBLUE} onPress={() => onSubmit({
                email,
                password
            })} />
        </>
    )
};

export default SignInForm