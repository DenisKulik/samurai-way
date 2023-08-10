export const Contact = ({ title, value }: ContactPropsType) => {
    return (
        <div>
            <p>
                {title}: {value}
            </p>
        </div>
    )
}

type ContactPropsType = {
    title: string
    value: string
}
