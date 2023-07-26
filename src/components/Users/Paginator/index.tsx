import { memo } from 'react'
import styles from './Paginator.module.scss'

export const Paginator = memo((props: PaginatorPropsType) => {
    const { pageSize, totalUsersCount, currentPage, changePageNumber } = props

    const pagesCount = Math.ceil(totalUsersCount / pageSize)
    const pagesArray = Array.from({ length: pagesCount }, (_, i) => i + 1)

    const pagesElements = pagesArray.map(page => (
        <span
            key={page}
            className={`${styles.page} ${currentPage === page ? styles.selectedPage : ''}`}
            onClick={() => changePageNumber(page)}
        >
            {page}
        </span>
    ))

    return <div className={styles.paginator}>{pagesElements}</div>
})

// types
type PaginatorPropsType = {
    pageSize: number
    totalUsersCount: number
    currentPage: number
    changePageNumber: (page: number) => void
}
