import { PureComponent } from 'react'
import styles from './Paginator.module.scss'
import Button from 'components/common/Button'

export class Paginator extends PureComponent<PaginatorPropsType, PaginatorStateType> {
    state: PaginatorStateType = {
        portionNumber: Math.ceil(this.props.currentPage / (this.props?.portionSize || 10)),
    }

    onPageClick = (page: number) => {
        const { changePageNumber } = this.props
        changePageNumber(page)
    }

    onPrevClick = () => {
        this.setState({
            portionNumber: this.state.portionNumber - 1,
        })
    }

    onNextClick = () => {
        this.setState({
            portionNumber: this.state.portionNumber + 1,
        })
    }

    render() {
        const { pageSize, totalItemsCount, currentPage, portionSize = 10 } = this.props

        const pagesCount = Math.ceil(totalItemsCount / pageSize)
        const pagesArray = Array.from({ length: pagesCount }, (_, i) => i + 1)
        const portionCount = Math.ceil(pagesCount / portionSize)
        const leftPortionPageNumber = (this.state.portionNumber - 1) * portionSize + 1
        const rightPortionPageNumber = this.state.portionNumber * portionSize

        const pages = pagesArray
            .filter(page => page >= leftPortionPageNumber && page <= rightPortionPageNumber)
            .map(page => (
                <span
                    key={page}
                    className={`${styles.page} ${currentPage === page ? styles.selectedPage : ''}`}
                    onClick={() => this.onPageClick(page)}
                >
                    {page}
                </span>
            ))

        const showPrevButton = this.state.portionNumber > 1
        const showNextButton = this.state.portionNumber < portionCount

        return (
            <div className={styles.paginator}>
                {showPrevButton && <Button title="prev" onClick={this.onPrevClick} />}
                {pages}
                {showNextButton && <Button title="next" onClick={this.onNextClick} />}
            </div>
        )
    }
}

// types
type PaginatorPropsType = {
    pageSize: number
    totalItemsCount: number
    currentPage: number
    portionSize?: number
    changePageNumber: (page: number) => void
}

type PaginatorStateType = {
    portionNumber: number
}
