module.exports = {
    "preset": "react-native",
    "setupFiles": [
        "<rootDir>/jest/setup.js",
        "<rootDir>/jest/react-navigation.js"
    ],
    "transformIgnorePatterns": [
        "node_modules/(?!(jest-)?react-native|@react-native-community|@react-navigation)",
    ],
    "testPathIgnorePatterns": [
        "<rootDir>/src/__tests__/__mocks__/"
    ],
    "moduleFileExtensions": [
        "ts",
        "tsx",
        "js",
        "jsx",
        "json",
        "node"
    ]
}