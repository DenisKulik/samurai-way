import { Component } from 'react';
import styles from './ProfileStatus.module.scss';

type ProfileStatusPropsType = {
    status: string
}

export class ProfileStatus extends Component<ProfileStatusPropsType> {
    state = {
        editMode: false
    };

    activateEditMode = () => {
        this.setState({
            editMode: true
        });
    };

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        });
    };

    render = () => (
        <div className={styles.profileStatus}>
            {
                this.state.editMode ?
                    <input
                        onBlur={this.deactivateEditMode}
                        value={this.props.status}
                        autoFocus
                    /> :
                    <span onDoubleClick={this.activateEditMode}>
                        {this.props.status}
                    </span>
            }
        </div>
    );
}