export const requiredField = (value: string) => {
    if (value) return undefined

    return 'Field is required'
}

export const maxLengthCreator = (maxLength: number) => (value: string) => {
    if (value.length <= maxLength) return undefined

    return 'The maximum length must not exceed 50 characters'
}
