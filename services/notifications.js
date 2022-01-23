import { NotificationManager } from 'react-notifications';

export const notification = {

    info: ({message, title}) => {
        NotificationManager.info(message, title)
    },

    success: ({message, title}) => {
        NotificationManager.success(message, title)
    },

    warning: ({message, title}) => {
        NotificationManager.warning(message, title)
    },

    error: ({message, title}) => {
        NotificationManager.error(message, title)
    }
}