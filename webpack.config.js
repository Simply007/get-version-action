const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
        // ...
        fallback: {
            // 👇️👇️👇️ add this 👇️👇️👇️
            "os": require.resolve("os-browserify/browser"),
        }
    }
};
