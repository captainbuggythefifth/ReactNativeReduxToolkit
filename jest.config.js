module.exports = {
    "preset": "react-native",
    "setupFiles": [
        "<rootDir>/jest/setup.js"
    ],
    "transformIgnorePatterns": [
        "node_modules/(?!(jest-)?react-native|@react-native-community|@react-navigation)",
    ],
    "testPathIgnorePatterns": [
        "<rootDir>/src/__tests__/__mocks__/"
    ]
}