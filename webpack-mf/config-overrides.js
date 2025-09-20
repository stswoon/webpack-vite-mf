const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = function override(config, env) {
    config.output.publicPath = "auto"
    config.plugins = [
        ...config.plugins,
        new ModuleFederationPlugin({
            name: 'webpackMfApp',
            // library: { type: 'var', name: 'webpackMfLib' },
            // library: { type: 'module' },
            filename: 'remote_webpackMf.js',
            exposes: {
                './WebpackMf': './src/WebpackMf',
            },
            shared: {},
        }),
    ]
    return config;
}