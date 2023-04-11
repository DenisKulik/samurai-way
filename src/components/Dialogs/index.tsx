import styles from './Dialogs.module.scss';
import Dialog from './Dialog';
import Message from './Message';


const Dialogs = () => {
    const dialogsData = [
        { id: 1, name: 'William' },
        { id: 2, name: 'Emma' },
        { id: 3, name: 'James' },
        { id: 4, name: 'Addison' },
        { id: 5, name: 'Ethan' },
        { id: 6, name: 'Hailey' },
    ];

    const messagesData = [
        {
            id: 1,
            message: 'Hey, any advice for someone starting to learn programming?'
        },
        {
            id: 2,
            message: 'Sure! Start with a beginner-friendly language like JavaScript, and practice coding every day.'
        },
        {
            id: 3,
            message: 'Got it. Any specific resources you recommend?'
        },
        {
            id: 4,
            message: 'Codecademy and Udemy have great courses, and there are tons of coding blogs and YouTube tutorials out there too.'
        },
    ];

    return (
        <div className={ styles.dialogs }>
            <div className={ styles.dialogsItems }>
                {
                    dialogsData.map(user => (
                        <Dialog key={ user.id } id={ user.id }
                                name={ user.name }
                                isActive={ false } />
                    ))
                }
            </div>
            <div className={ styles.dialogsMessages }>
                {
                    messagesData.map(item => (
                        <Message key={ item.id } message={ item.message } />
                    ))
                }
            </div>
        </div>
    );
};

export default Dialogs;