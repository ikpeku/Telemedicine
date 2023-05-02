import { useState } from 'react';

import { StyleSheet, Text, View } from 'react-native'
import { ProgressBar, MD3Colors } from 'react-native-paper';
import Button from '../../../static/Button';

const questionnaire = () => {
    const [progress, setProgress] = useState(0.1)
    return (
        <View style={styles.root} >
            <ProgressBar progress={progress} color={"#0665CB"} style={{ marginVertical: 30 }} />
            <Text style={{ textAlign: "center" }}>{progress.toFixed(1) * 10} / 10</Text>

            <View>
                {progress.toFixed(1) < 1 && <Button onPress={() => setProgress((current) => current + 0.1)} title={"Next"} />}
                {progress.toFixed(1) >= 1 && <Button title={"Done"} />}
            </View>
        </View>
    )
}

export default questionnaire

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: "#fff"
    }
})