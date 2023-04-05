import { NavLink } from 'react-router-dom';
import styles from './Dialogs.module.scss';

const Dialogs = () => {
    return (
        <div className={ styles.dialogs }>
            <div className={ styles.dialogsItems }>
                <div className={ `${ styles.item } ${ styles.active }` }>
                    <NavLink to="/dialogs/1">William</NavLink>
                </div>
                <div className={ styles.item }>
                    <NavLink to="/dialogs/2">Emma</NavLink>
                </div>
                <div className={ styles.item }>
                    <NavLink to="/dialogs/3">James</NavLink>
                </div>
                <div className={ styles.item }>
                    <NavLink to="/dialogs/4">Addison</NavLink>
                </div>
                <div className={ styles.item }>
                    <NavLink to="/dialogs/5">Ethan</NavLink>
                </div>
                <div className={ styles.item }>
                    <NavLink to="/dialogs/6">Hailey</NavLink>
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