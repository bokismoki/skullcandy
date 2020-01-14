import Vue from 'vue';

export function outputNotification(err, msg) {
    if (err) {
        return Vue.notify({
            group: 'notification',
            title: 'Error caught:',
            type: 'error',
            text: err
        })
    }
    Vue.notify({
        group: 'notification',
        title: 'Cart status:',
        type: 'success',
        text: msg
    })
}