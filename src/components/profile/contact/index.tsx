type Props = {
    title: string
    value: string
}

export const Contact = ({ title, value }: Props) => {
    return (
        <div>
            <p>
                {title}: {value}
            </p>
        </div>
    )
}
