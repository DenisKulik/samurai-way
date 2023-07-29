import { ChangeEvent, PureComponent } from 'react'
import styles from './ProfileStatus.module.scss'

export class ProfileStatus extends PureComponent<ProfileStatusPropsType> {
    state = {
        editMode: false,
        status: this.props.status,
    }

    componentDidUpdate(
        prevProps: Readonly<ProfileStatusPropsType>,
        prevState: Readonly<ProfileStatusPropsType>,
    ) {
        const { status } = this.props
        if (prevProps.status !== status) {
            this.setState({ status })
        }
    }

    activateEditMode = () => {
        this.setState({
            editMode: true,
        })
    }

    deactivateEditMode = () => {
        const { updateUserStatus } = this.props
        this.setState({
            editMode: false,
        })
        updateUserStatus(this.state.status)
    }

    onChangeStatus = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value,
        })
    }

    render() {
        const { status } = this.props

        return (
            <div className={styles.profileStatus}>
                {this.state.editMode ? (
                    <input
                        onChange={this.onChangeStatus}
                        onBlur={this.deactivateEditMode}
                        value={this.state.status}
                        autoFocus
                    />
                ) : (
                    <span onDoubleClick={this.activateEditMode}>{status || 'Add status'}</span>
                )}
            </div>
        )
    }
}

// types
type ProfileStatusPropsType = {
    status: string
    updateUserStatus: (status: string) => void
}
