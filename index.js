const path = require('path')

module.exports = function nuxtVTooltip(moduleOptions) {
    const options = Object.assign({}, this.options.VTooltip, moduleOptions)

    // Register plugin
    this.addPlugin({
        src: path.resolve(__dirname, 'plugin.js'),
        ssr: false,
        fileName: 'v-tooltip.js',
        options
    })
}

module.exports.meta = require('../package.json')