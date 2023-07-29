export const FB_PIXEL_ID = import.meta.env.VITE_PUBLIC_FACEBOOK_PIXEL_ID

export const pageview = () => {
    window.fbq("track" , "PageView")
}

export const event = (name, options = {}) => {
    window.fbq("track" , name , options)
}