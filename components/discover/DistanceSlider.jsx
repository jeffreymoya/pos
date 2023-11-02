import Slider from "@react-native-community/slider";

export function DistanceSlider() {
    return (
        <Slider

            style={{height: 40, marginLeft: 5, marginRight: 10}}
            minimumValue={0}
            maximumValue={1}
        />
    )
}