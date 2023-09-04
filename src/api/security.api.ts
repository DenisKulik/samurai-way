import { instance, getCaptchaUrlType } from 'api'

export const securityAPI = {
    getCaptchaUrl() {
        return instance
            .get<getCaptchaUrlType>(`security/get-captcha-url`)
            .then(response => response.data)
    },
}
