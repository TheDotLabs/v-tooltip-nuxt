import Vue from 'vue'
import {GlobalVTooltip, GlobalVTooltipOptions, VTooltip} from 'v-tooltip'

declare module '@nuxt/vue-app' {
    interface Context {
        $VTooltip: GlobalVTooltip
    }

    interface NuxtAppOptions {
        $VTooltip: GlobalVTooltip
    }
}

// Nuxt 2.9+
declare module '@nuxt/types' {
    interface Context {
        $VTooltip: GlobalVTooltip
    }

    interface NuxtAppOptions {
        $VTooltip: GlobalVTooltip
    }

    interface Configuration {
        VTooltip?: GlobalVTooltipOptions
    }

}

declare module 'vue/types/vue' {
    interface Vue {
        $VTooltip: GlobalVTooltip
    }
}

declare module 'vuex/types/index' {
    interface Store<S> {
        $VTooltip: GlobalVTooltip
    }
}