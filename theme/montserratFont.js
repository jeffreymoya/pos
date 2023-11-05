export const montserrat = 'Montserrat'

const montserratFont = () => ({
    [montserrat]: require(`/assets/fonts/${montserrat}-Regular.ttf`),
    [`${montserrat}-Medium`]: require(`/assets/fonts/${montserrat}-Medium.ttf`),
    [`${montserrat}-Light`]: require(`/assets/fonts/${montserrat}-Light.ttf`),
    [`${montserrat}-Thin`]: require(`/assets/fonts/${montserrat}-Thin.ttf`),
})

export const fontConfigMontserrat = {
    fontFamily: montserrat,
}
export default montserratFont