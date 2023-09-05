import styles from 'features/messages/ui/message/message.module.scss'

type Props = {
    message: string
}

export const Message = ({ message }: Props) => {
    return <div className={styles.message}>{message}</div>
}
