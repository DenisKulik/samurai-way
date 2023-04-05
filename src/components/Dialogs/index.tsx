import styles from './Dialogs.module.scss';

const Dialogs = () => {
    return (
        <div className={ styles.dialogs }>
            <div className={ styles.dialogsItems }>
                <div className={ `${ styles.item } ${ styles.active }` }>
                    William
                </div>
                <div className={ styles.item }>
                    Emma
                </div>
                <div className={ styles.item }>
                    James
                </div>
                <div className={ styles.item }>
                    Addison
                </div>
                <div className={ styles.item }>
                    Ethan
                </div>
                <div className={ styles.item }>
                    Hailey
                </div>
            </div>
            <div className={ styles.dialogsMessages }>
                <div className={ styles.message }>
                    Hey, any advice for someone starting to learn programming?
                </div>
                <div className={ styles.message }>
                    Sure! Start with a beginner-friendly language like
                    JavaScript, and practice coding every day.
                </div>
                <div className={ styles.message }>
                    Got it. Any specific resources you recommend?
                </div>
                <div className={ styles.message }>
                    Codecademy and Udemy have great courses, and there are tons
                    of coding blogs and YouTube tutorials out there too.
                </div>
            </div>
        </div>
    );
};

export default Dialogs;