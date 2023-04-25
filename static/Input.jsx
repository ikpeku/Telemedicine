import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-paper';
import { Controller } from "react-hook-form";

const Input = ({ control, name, label, placeholder, rules, passord = false }) => {
    const [secure, setSecure] = React.useState(false);



    return (
        <Controller
            control={control}
            name={name}
            rules={rules}
            render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
                <View style={{ marginBottom: 10 }}>
                    <TextInput
                        mode="outlined"
                        label={label}
                        placeholder={placeholder}
                        secureTextEntry={secure}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        right={passord ? <TextInput.Icon icon={secure ? "eye-off" : "eye"} onPress={() => setSecure((current => !current))} /> : null}
                    />
                    {error?.message && <Text style={{ color: "red" }}>{error?.message}</Text>}
                </View>
            )}

        />

    )
}

export default Input

const styles = StyleSheet.create({})