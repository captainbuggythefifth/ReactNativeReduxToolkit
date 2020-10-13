import React from 'react';
import { RootState } from 'states/rootReducer';
import { useDispatch, useSelector } from 'react-redux';
import Button from 'components/atoms/Button';
import { decrement, increment } from 'states/counter';
import TranslationThemedText from './TranslationThemedText';

export const counterHeader = "Counter"

const Counter = () => {
    const counter = useSelector((state: RootState) => state.counter);
    const dispatch = useDispatch();

    return (
        <>
            <>
                <TranslationThemedText text={counterHeader} />
                <Button title={"+"} onPress={() => dispatch(increment())} />
                <Button title={"-"} onPress={() => dispatch(decrement())} />
                <TranslationThemedText preTextOnly={""} text={`${counterHeader}`} postTextOnly={`: ${counter}`} />
            </>

        </>
    )
};

export default Counter