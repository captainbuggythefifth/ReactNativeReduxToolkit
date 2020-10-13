import React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { fireEvent, render, RenderAPI, waitFor } from '@testing-library/react-native';
import { AuthenticationProvider, useAuthentication } from 'contexts/Authentication';
import { AUTHENTICATION } from 'common';
import Button from 'components/atoms/Button';
import Persistence from 'helpers/Persistence';

import { Text } from 'react-native-elements';
import AsyncStorage from './../__mocks__/@react-native-community/async-storage';

const buttonTitle = "Press Me";

export const MockAuthentication = () => {
    const { authenticated, setAuthenticated } = useAuthentication();

    return (
        <>
            <Text>{authenticated.toString()}</Text>
            <Button
                title={buttonTitle}
                onPress={() => {

                    setAuthenticated(true)
                }}
            />
        </>
    )
}

describe('AuthenticationProvider', () => {
    let wrapper: RenderAPI;
    const { result, waitForNextUpdate } = renderHook(() => useAuthentication());

    const persistence = new Persistence(AsyncStorage);

    beforeEach(async () => {
        await persistence.remove(AUTHENTICATION.PersistenceKey);
        wrapper = render(
            <AuthenticationProvider>
                <MockAuthentication />
            </AuthenticationProvider>
        )
    });

    it(`should have ${AUTHENTICATION.DEFAULT} by default`, () => {
        expect(result.current.authenticated).toBe(AUTHENTICATION.DEFAULT);
    });

    it(`should have ${AUTHENTICATION.DEFAULT} by default on the page`, () => {
        expect(wrapper.getAllByText(AUTHENTICATION.DEFAULT.toString())).toHaveLength(1);
    });

    it(`should have true when setAuthentication(${AUTHENTICATION.AUTHENTICATED})`, async () => {
        fireEvent.press(wrapper.getByText(buttonTitle));
        expect(wrapper.getAllByText(AUTHENTICATION.AUTHENTICATED.toString())).toHaveLength(1);
    });

    it('should have null as persistence key', async () => {
        const authenticatePersistedDefault = await persistence.retreive(AUTHENTICATION.PersistenceKey);
        expect(authenticatePersistedDefault).toBe(null)
    })

    it(`should have true when setAuthentication(${AUTHENTICATION.AUTHENTICATED})`, async () => {
        fireEvent.press(wrapper.getByText(buttonTitle));
        expect(wrapper.getAllByText(AUTHENTICATION.AUTHENTICATED.toString())).toHaveLength(1);
        const authenticatePersisted = await persistence.retreive(AUTHENTICATION.PersistenceKey);
        expect(authenticatePersisted).toBe(AUTHENTICATION.AUTHENTICATED)
    });

    it('should have true when persistence has value', async () => {
        await persistence.store(AUTHENTICATION.PersistenceKey, AUTHENTICATION.AUTHENTICATED);
        
        wrapper = render(
            <AuthenticationProvider>
                <MockAuthentication />
            </AuthenticationProvider>
        )

        await waitFor(() => expect(wrapper.getAllByText(AUTHENTICATION.AUTHENTICATED.toString())).toHaveLength(1))

    })
})