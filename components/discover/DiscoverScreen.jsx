import {StyleSheet, View} from 'react-native';
import {Appbar, Divider} from 'react-native-paper';
import {DiscoverList} from "./DiscoverList";
import {DistanceSlider} from "./DistanceSlider";

export function DiscoverScreen() {
    return (
        <View>
            <Appbar.Header
                elevated={true}
            >
                <Appbar.Content titleStyle={styles.container} title="Discover"/>
            </Appbar.Header>
            <DistanceSlider/>
            <Divider/>
            <View style={styles.content}>
                <DiscoverList/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        padding: 16,
    },
});
