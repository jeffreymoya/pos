import React, { memo } from 'react'
import { List } from 'react-native-paper'
import { StyleSheet } from 'react-native'
import { Style } from 'react-native-paper/src/components/List/utils'

type PaperProps = { color: string; style?: Style }

type ItemProps = {
	left?: (props: PaperProps) => React.ReactNode
	right?: (props: PaperProps) => React.ReactNode
	title: string
}
const Item = ({ left, right, title }: ItemProps) => {
	return <List.Item style={styles.listItem} titleStyle={styles.title} title={title} left={left} right={right} />
}

const styles = StyleSheet.create({
	listItem: {
		gridTemplateColumns: '1fr 3fr 1fr',
		alignItems: 'center',
		padding: 5,
		height: 50,
		overflow: 'hidden',
		borderRadius: 5,
		boxShadow: '0 5px 7px -1px rgba(51, 51, 51, 0.13)',
		transition: 'transform .25s cubic-bezier(.7,.98,.86,.98), box-shadow .25s cubic-bezier(.7,.98,.86,.98)',
		margin: 5,
	},
	title: {
		fontSize: 12,
		fontWeight: 'bold',
		color: '#000',
	},
})
export default memo(Item)
