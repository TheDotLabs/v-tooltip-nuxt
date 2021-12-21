import path from "path";
import {Module} from '@nuxt/types'
import {GlobalVTooltipOptions} from "v-tooltip";

const myModule: Module<GlobalVTooltipOptions> = function nuxtVTooltip(moduleOptions) {
    const options = Object.assign({}, this.options.VTooltip, moduleOptions)

    // Register plugin
    this.addPlugin({
        src: path.resolve(__dirname, 'plugin.js'),
        ssr: false,
        fileName: 'v-tooltip.js',
        options
    })
}

export default myModule

export const meta = require('./../package.json')


