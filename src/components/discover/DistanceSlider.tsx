import Slider from '@react-native-community/slider'
import React from 'react'
import { debounce } from 'lodash'

type DistanceSliderProps = {
	distance: number
	onChange: (value: number) => void
}
export const DistanceSlider = ({ distance, onChange }: DistanceSliderProps) => {
	const _minimumValue = 0
	const _maximumValue = 100
	const _step = 5
	const _onChange = debounce(onChange, 1000)
	return (
		<Slider
			style={{ height: 40, marginLeft: 5, marginRight: 10 }}
			minimumValue={_minimumValue}
			maximumValue={_maximumValue}
			value={distance}
			onValueChange={_onChange}
			step={_step}
		/>
	)
}
