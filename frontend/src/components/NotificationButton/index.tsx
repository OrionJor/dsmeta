import icon from '../../assents/img/notification-icon.svg'

import './styles.css'

function NotificationButton(){
    return(
        <div className="dsmeta-red-btn">
            <img src={icon} alt="Notificação" />

        </div>
    )
}

export default NotificationButton