import React, { DetailedHTMLProps } from 'react'
import styles from './Button.module.scss'

type DefaultInputProps = DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
>

type ButtonPropsType = DefaultInputProps & {
    title: string
    callback?: () => void
}

const Button = (props: ButtonPropsType) => {
    const { title, callback, ...rest } = props

    return (
        <button className={styles.button} onClick={callback} {...rest}>
            {title}
        </button>
    )
}

export default Button
