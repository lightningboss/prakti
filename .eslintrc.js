module.exports = {
    env: {
        es6: true,
        browser: true,
    },
    extends: [
        'react-app',
        'eslint:recommended',
        'airbnb',
        'airbnb/hooks',
        'plugin:react/recommended',
        'plugin:prettier/recommended',
        'prettier/react',
    ],
    plugins: ['import', 'prettier'],
    rules: {
        'react/jsx-filename-extension': 0,
        'react/prop-types': 0,
    },
};
