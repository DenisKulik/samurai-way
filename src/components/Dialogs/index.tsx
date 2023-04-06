import styles from './Dialogs.module.scss';
import Dialog from './Dialog';
import Message from './Message';


const Dialogs = () => {
    return (
        <div className={ styles.dialogs }>
            <div className={ styles.dialogsItems }>
                <Dialog id={ 1 } name={ 'William' } isActive />
                <Dialog id={ 2 } name={ 'Emma' } isActive={ false } />
                <Dialog id={ 3 } name={ 'James' } isActive={ false } />
                <Dialog id={ 4 } name={ 'Addison' } isActive={ false } />
                <Dialog id={ 5 } name={ 'Ethan' } isActive={ false } />
                <Dialog id={ 6 } name={ 'Hailey' } isActive={ false } />
            </div>
            <div className={ styles.dialogsMessages }>
                <Message
                    message="Hey, any advice for someone starting to learn programming?" />
                <Message
                    message="Sure! Start with a beginner-friendly language like
                    JavaScript, and practice coding every day." />
                <Message
                    message="Got it. Any specific resources you recommend?" />
                <Message
                    message="Codecademy and Udemy have great courses, and there are tons
                    of coding blogs and YouTube tutorials out there too." />
            </div>
        </div>
    );
};

export default Dialogs;