import * as ToastAndroid from 'react-native/Libraries/Components/ToastAndroid/ToastAndroid.android'

export default function toast(msg: string) {
  return ToastAndroid.showWithGravity(msg, ToastAndroid.LONG, ToastAndroid.TOP)
}