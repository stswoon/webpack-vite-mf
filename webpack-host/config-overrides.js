const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = function override(config, env) {
    config.output.publicPath = "auto"
    config.plugins = [
        ...config.plugins,
        new ModuleFederationPlugin({
            name: 'mainApp',
            remotes: {
                webpackMfApp: 'webpackMfApp@http://localhost:3101/remote_webpackMf.js',
            },
            shared: {
                // react: {singleton: true, eager: true},
                // 'react-dom': {singleton: true, eager: true}
            }
        })
    ]
    return config;
}