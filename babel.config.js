module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          common: './src/common',
          components: './src/components',
          contexts: './src/contexts',
          helpers: './src/helpers',
          images: './src/images',
          navigations: './src/navigations',
          screens: './src/screens',
          states: './src/states',
          translations: './src/translations',
        },
      },
    ],
  ],
};
