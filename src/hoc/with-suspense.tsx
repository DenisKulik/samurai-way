import { ComponentType, Suspense } from 'react'
import { Preloader } from 'components/common/preloader'

export function withSuspense<T>(Component: ComponentType) {
    return (props: T) => {
        return (
            <Suspense fallback={<Preloader />}>
                <Component {...props} />
            </Suspense>
        )
    }
}
