import { ChangeEvent, Component } from 'react'
import styles from './ProfileStatus.module.scss'

type ProfileStatusPropsType = {
    status: string
    updateUserStatus: (status: string) => void
}

export class ProfileStatus extends Component<ProfileStatusPropsType> {
    state = {
        editMode: false,
        status: this.props.status,
    }

    componentDidUpdate(
        prevProps: Readonly<ProfileStatusPropsType>,
        prevState: Readonly<ProfileStatusPropsType>,
    ) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status,
            })
        }
    }

    activateEditMode = () => {
        this.setState({
            editMode: true,
        })
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false,
        })
        this.props.updateUserStatus(this.state.status)
    }

    onChangeStatus = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value,
        })
    }

    render = () => (
        <div className={styles.profileStatus}>
            {this.state.editMode ? (
                <input
                    onChange={this.onChangeStatus}
                    onBlur={this.deactivateEditMode}
                    value={this.state.status}
                    autoFocus
                />
            ) : (
                <span onDoubleClick={this.activateEditMode}>
                    {this.props.status || 'Add status'}
                </span>
            )}
        </div>
    )
}
