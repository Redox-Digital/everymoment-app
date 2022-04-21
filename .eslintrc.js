module.exports = {
    env: {
      browser: true,
      es2021: true,
      node: true,
    },
    extends: ['plugin:react/recommended', 'airbnb', "airbnb/hooks", 'prettier'],
    plugins: ['react', 'prettier'],
    rules: {
      'prettier/prettier': [0],
      'no-unused-vars': [0],
      'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
      'react/destructuring-assignment': [0],
      'class-methods-use-this': [0],
      'react/no-unused-class-component-methods': [0],
      'react/no-unused-state': [1],
      'react/no-unused-prop-types': [1],
      'react/require-default-props': [1],
    },
  };
