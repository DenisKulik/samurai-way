import { useState } from 'react'

import { UserType } from 'features/users/api/users.api.types'
import styles from './friends.module.scss'
import { Friend } from 'features/profile/ui/friends/friend'
import { Button } from 'common/components/button'

type Props = {
    users: UserType[]
}

export const Friends = ({ users }: Props) => {
    const [showAllFriends, setShowAllFriends] = useState(false)

    const onShowClickHandler = () => {
        setShowAllFriends(!showAllFriends)
    }

    const displayedFriends = showAllFriends ? users : users.slice(0, 6)

    return (
        <div className={styles.friends}>
            <h3 className={styles.heading}>My Friends</h3>
            <span className={styles.count}>{users.length} Friends</span>
            <ul className={styles.items}>
                {displayedFriends.map(friend => (
                    <Friend key={friend.id} friend={friend} />
                ))}
            </ul>
            {!showAllFriends ? (
                <Button title="See all" onClick={onShowClickHandler} />
            ) : (
                <Button title="Hide friends" onClick={onShowClickHandler} />
            )}
        </div>
    )
}
