import React from 'react';
import { render, RenderAPI } from '@testing-library/react-native';
import Text from 'components/atoms/Text';
import { TEXT, THEME } from 'common';
import { sTextStyle } from 'common/configs/text';


const { LIGHT, DARK, DEFAULT, getThemedTextColor } = THEME;

describe('Text rendering', () => {

    let wrapper: RenderAPI;
    let handleClick: jest.Mock;

    const text = "Yeah";

    beforeEach(() => {
        handleClick = jest.fn();
        wrapper = render(<Text>{text}</Text>);
    });

    it('should render text', () => {
        expect(wrapper.getAllByText(text)).toHaveLength(1);
    });

    describe('no type', () => {
        it('should have the default style', () => {
            expect(wrapper.getByText(text).props.style).toEqual(sTextStyle[TEXT.DEFAULT]);
        })
    });

    describe('primary type', () => {
        const type = TEXT.PRIMARY;
        beforeEach(() => {
            wrapper = render(<Text type={type}>{text}</Text>);
        });
        it('should have the primary style', () => {
            expect(wrapper.getByText(text).props.style).toEqual(sTextStyle[type]);
        })
    });
    describe('secondary type', () => {
        const type = TEXT.SECONDARY;
        beforeEach(() => {
            wrapper = render(<Text type={type}>{text}</Text>);
        });
        it('should have the primary style', () => {
            expect(wrapper.getByText(text).props.style).toEqual(sTextStyle[type]);
        })
    });

    describe(`should match ${DEFAULT}`, () => {
        const type = TEXT.DEFAULT;
        const theme = DEFAULT;
        beforeEach(() => {
            wrapper = render(<Text theme={theme}>{text}</Text>);
        });
        it('should have the primary style', () => {
            expect(wrapper.getByText(text).props.style).toEqual(sTextStyle[type]);
        })
    });

    describe(`should match ${DARK}`, () => {
        const type = TEXT.DEFAULT;
        const theme = DARK;
        beforeEach(() => {
            wrapper = render(<Text theme={theme}>{text}</Text>);
        });
        it('should have the primary style', () => {
            const style = {
                ...sTextStyle[type],
                color: getThemedTextColor(theme)
            }
            expect(wrapper.getByText(text).props.style).toEqual(style);
        })
    });
});