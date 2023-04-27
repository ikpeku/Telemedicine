import { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { List, RadioButton } from 'react-native-paper';
import { Button } from '../../static';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

const MedicalProfile = () => {

    const [BloodGroup, setBloodGroup] = useState("O+");
    const [Genetype, setGenetype] = useState("AA");
    const [Allergies, setAllergies] = useState(false);
    const [ChronicDisease, setChronicDisease] = useState(false);
    const [Injuries, setInjuries] = useState(false);
    const [Sugeries, setSugeries] = useState(false);
    const [Smoking, setSmoking] = useState(false);
    const [AlcoholConsumption, setAlcoholConsumption] = useState(false);



    const onSavePress = () => { }

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <List.AccordionGroup >

                    <List.Accordion title="Blood Group" id="1" style={styles.container}
                        right={props => props.isExpanded
                            ? <MaterialIcons {...props} name="keyboard-arrow-up" size={24} color="#0665CB" />
                            : <MaterialIcons {...props} name="keyboard-arrow-down" size={24} color="#0665CB" />}
                    >
                        <View style={[styles.item, { flexWrap: "wrap" }]}>

                            <List.Item title="A+" style={{ flexGrow: 1, width: "50%" }} left={props =>
                                <RadioButton
                                    {...props}
                                    value="A+"
                                    status={BloodGroup === "A+" ? 'checked' : 'unchecked'}
                                    onPress={() => setBloodGroup("A+")}
                                />} />

                            <List.Item title="A-" style={{ flexGrow: 1, width: "50%" }} left={props =>
                                <RadioButton
                                    value="A-"
                                    {...props}
                                    status={BloodGroup === "A-" ? 'checked' : 'unchecked'}
                                    onPress={() => setBloodGroup("A-")}
                                />} />


                            <List.Item title="B+" style={{ flexGrow: 1, width: "50%" }} left={props =>
                                <RadioButton
                                    {...props}
                                    value="B+"
                                    status={BloodGroup === "B+" ? 'checked' : 'unchecked'}
                                    onPress={() => setBloodGroup("B+")}
                                />} />

                            <List.Item title="B-" style={{ flexGrow: 1, width: "50%" }} left={props =>
                                <RadioButton
                                    value="B-"
                                    {...props}
                                    status={BloodGroup === "B-" ? 'checked' : 'unchecked'}
                                    onPress={() => setBloodGroup("B-")}
                                />} />

                            <List.Item title="O+" style={{ flexGrow: 1, width: "50%" }} left={props =>
                                <RadioButton
                                    {...props}
                                    value="O+"
                                    status={BloodGroup === "O+" ? 'checked' : 'unchecked'}
                                    onPress={() => setBloodGroup("O+")}
                                />} />

                            <List.Item title="O-" style={{ flexGrow: 1, width: "50%" }} left={props =>
                                <RadioButton
                                    value="O-"
                                    {...props}
                                    status={BloodGroup === "O-" ? 'checked' : 'unchecked'}
                                    onPress={() => setBloodGroup("O-")}
                                />} />


                            <List.Item title="AB+" style={{ flexGrow: 1, width: "50%" }} left={props =>
                                <RadioButton
                                    {...props}
                                    value="AB+"
                                    status={BloodGroup === "AB+" ? 'checked' : 'unchecked'}
                                    onPress={() => setBloodGroup("AB+")}
                                />} />

                            <List.Item title="AB-" style={{ flexGrow: 1, width: "50%" }} left={props =>
                                <RadioButton
                                    value="AB-"
                                    {...props}
                                    status={BloodGroup === "AB-" ? 'checked' : 'unchecked'}
                                    onPress={() => setBloodGroup("AB-")}
                                />} />
                        </View>


                    </List.Accordion>




                    <List.Accordion title="Genotype" id="2" style={styles.container}
                        right={props => props.isExpanded
                            ? <MaterialIcons {...props} name="keyboard-arrow-up" size={24} color="#0665CB" />
                            : <MaterialIcons {...props} name="keyboard-arrow-down" size={24} color="#0665CB" />}
                    >
                        <View style={[styles.item, { flexWrap: "wrap" }]}>
                            <List.Item title="AA" style={{ flexGrow: 1, width: "50%" }} left={props =>
                                <RadioButton
                                    {...props}
                                    value="AA"
                                    status={Genetype === "AA" ? 'checked' : 'unchecked'}
                                    onPress={() => setGenetype("AA")}
                                />} />

                            <List.Item title="AA" style={{ flexGrow: 1, width: "50%" }} left={props =>
                                <RadioButton
                                    value="AS"
                                    {...props}
                                    status={Genetype === "AS" ? 'checked' : 'unchecked'}
                                    onPress={() => setGenetype("AS")}
                                />} />


                            <List.Item title="AC" style={{ flexGrow: 1, width: "50%" }} left={props =>
                                <RadioButton
                                    {...props}
                                    value="AC"
                                    status={Genetype === "AC" ? 'checked' : 'unchecked'}
                                    onPress={() => setGenetype("AC")}
                                />} />

                            <List.Item title="SS" style={{ flexGrow: 1, width: "50%" }} left={props =>
                                <RadioButton
                                    value="SS"
                                    {...props}
                                    status={Genetype === "SS" ? 'checked' : 'unchecked'}
                                    onPress={() => setGenetype("SS")}
                                />} />
                        </View>
                    </List.Accordion>



                    <View>
                        <List.Accordion title="Allergies" id="3" style={styles.container}
                            right={props => props.isExpanded
                                ? <MaterialIcons {...props} name="keyboard-arrow-up" size={24} color="#0665CB" />
                                : <MaterialIcons {...props} name="keyboard-arrow-down" size={24} color="#0665CB" />}
                        >
                            <View style={styles.item}>
                                <List.Item title="yes" style={{ flexGrow: 1 }} left={props =>
                                    <RadioButton
                                        {...props}
                                        value="yes"
                                        status={Allergies ? 'checked' : 'unchecked'}
                                        onPress={() => setAllergies(true)}
                                    />} />
                                <List.Item title="No" style={{ flexGrow: 1 }} left={props =>
                                    <RadioButton
                                        value="no"
                                        {...props}
                                        status={!Allergies ? 'checked' : 'unchecked'}
                                        onPress={() => setAllergies(false)}
                                    />} />
                            </View>
                        </List.Accordion>
                    </View>


                    <List.Accordion title="Chronic Disease" id="4" style={styles.container}
                        right={props => props.isExpanded
                            ? <MaterialIcons {...props} name="keyboard-arrow-up" size={24} color="#0665CB" />
                            : <MaterialIcons {...props} name="keyboard-arrow-down" size={24} color="#0665CB" />}
                    >
                        <View style={styles.item}>
                            <List.Item title="yes" style={{ flexGrow: 1 }} left={props =>
                                <RadioButton
                                    {...props}
                                    value="yes"
                                    status={ChronicDisease ? 'checked' : 'unchecked'}
                                    onPress={() => setChronicDisease(true)}
                                />} />
                            <List.Item title="No" style={{ flexGrow: 1 }} left={props =>
                                <RadioButton
                                    value="no"
                                    {...props}
                                    status={!ChronicDisease ? 'checked' : 'unchecked'}
                                    onPress={() => setChronicDisease(false)}
                                />} />
                        </View>
                    </List.Accordion>



                    <List.Accordion title="Injuries" id="5" style={styles.container}
                        right={props => props.isExpanded
                            ? <MaterialIcons {...props} name="keyboard-arrow-up" size={24} color="#0665CB" />
                            : <MaterialIcons {...props} name="keyboard-arrow-down" size={24} color="#0665CB" />}
                    >
                        <View style={styles.item}>
                            <List.Item title="yes" style={{ flexGrow: 1 }} left={props =>
                                <RadioButton
                                    {...props}
                                    value="yes"
                                    status={Injuries ? 'checked' : 'unchecked'}
                                    onPress={() => setInjuries(true)}
                                />} />
                            <List.Item title="No" style={{ flexGrow: 1 }} left={props =>
                                <RadioButton
                                    value="no"
                                    {...props}
                                    status={!Injuries ? 'checked' : 'unchecked'}
                                    onPress={() => setInjuries(false)}
                                />} />
                        </View>
                    </List.Accordion>


                    <List.Accordion title="Sugeries" id="6" style={styles.container}
                        right={props => props.isExpanded
                            ? <MaterialIcons {...props} name="keyboard-arrow-up" size={24} color="#0665CB" />
                            : <MaterialIcons {...props} name="keyboard-arrow-down" size={24} color="#0665CB" />}
                    >
                        <View style={styles.item}>
                            <List.Item title="yes" style={{ flexGrow: 1 }} left={props =>
                                <RadioButton
                                    {...props}
                                    value="yes"
                                    status={Sugeries ? 'checked' : 'unchecked'}
                                    onPress={() => setSugeries(true)}
                                />} />
                            <List.Item title="No" style={{ flexGrow: 1 }} left={props =>
                                <RadioButton
                                    value="no"
                                    {...props}
                                    status={!Sugeries ? 'checked' : 'unchecked'}
                                    onPress={() => setSugeries(false)}
                                />} />
                        </View>
                    </List.Accordion>

                    <List.Accordion title="Do you smoke?" id="7" style={styles.container}
                        right={props => props.isExpanded
                            ? <MaterialIcons {...props} name="keyboard-arrow-up" size={24} color="#0665CB" />
                            : <MaterialIcons {...props} name="keyboard-arrow-down" size={24} color="#0665CB" />}
                    >
                        <View style={styles.item}>
                            <List.Item title="yes" style={{ flexGrow: 1 }} left={props =>
                                <RadioButton
                                    {...props}
                                    value="yes"
                                    status={Smoking ? 'checked' : 'unchecked'}
                                    onPress={() => setSmoking(true)}
                                />} />
                            <List.Item title="No" style={{ flexGrow: 1 }} left={props =>
                                <RadioButton
                                    value="no"
                                    {...props}
                                    status={!Smoking ? 'checked' : 'unchecked'}
                                    onPress={() => setSmoking(false)}
                                />} />
                        </View>
                    </List.Accordion>

                    <List.Accordion title="Alcohol Consumption" id="8" style={styles.container}
                        right={props => props.isExpanded
                            ? <MaterialIcons {...props} name="keyboard-arrow-up" size={24} color="#0665CB" />
                            : <MaterialIcons {...props} name="keyboard-arrow-down" size={24} color="#0665CB" />}
                    >
                        <View style={styles.item}>
                            <List.Item title="yes" style={{ flexGrow: 1 }} left={props =>
                                <RadioButton
                                    {...props}
                                    value="yes"
                                    status={AlcoholConsumption ? 'checked' : 'unchecked'}
                                    onPress={() => setAlcoholConsumption(true)}
                                />} />
                            <List.Item title="No" style={{ flexGrow: 1 }} left={props =>
                                <RadioButton
                                    value="no"
                                    {...props}
                                    status={!AlcoholConsumption ? 'checked' : 'unchecked'}
                                    onPress={() => setAlcoholConsumption(false)}
                                />} />
                        </View>
                    </List.Accordion>


                </List.AccordionGroup>

                <View style={{ marginTop: 30 }}>
                    <Button title="Save" onPress={onSavePress} />
                </View>

            </View>
        </ScrollView>
    )
};

export default MedicalProfile;

const styles = StyleSheet.create({
    root: {
        flex: 1,
        gap: 10
    },
    container: {
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius: 8
    },

    item: {
        flexDirection: "row",
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})