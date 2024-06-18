import { Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import axios from 'axios';
import { useLocalSearchParams } from 'expo-router';

const create = () => {
    const { id } = useLocalSearchParams();

    const [formData, setFormData] = useState({
        biodataOfPatientId: id,
        clinicDate: '',
        natureOfAilment: '',
        medicinePrescribed: '',
        procedureUndertaken: '',
        dateOfNextAppointment: ''
    });

    const handleChange = (name: any, value: any) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleFormSubmit = async () => {
        try {
            const response = await axios.post('http://10.9.116.121:3000/clinical-records', formData);
            console.log(formData); // Handle the response from the backend
            setFormData({
                biodataOfPatientId: id,
                clinicDate: '',
                natureOfAilment: '',
                medicinePrescribed: '',
                procedureUndertaken: '',
                dateOfNextAppointment: ''
            });
        } catch (error) {
            console.error(`problem ${error}`); // Handle any errors
        }
    };


    return (
        <ScrollView style={styles.container}>
            <View style={styles.inputContainer}>
                <Text style={styles.labelText}>First name:</Text>
                <TextInput
                    placeholder="clinicDate"
                    value={formData.clinicDate}
                    onChangeText={(text) => handleChange('clinicDate', text)}
                    style={styles.input}
                />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.labelText}>Surname:</Text>
                <TextInput
                    placeholder="natureofAliment"
                    value={formData.natureOfAilment}
                    onChangeText={(text) => handleChange('natureOfAilment', text)}
                    style={styles.input}
                />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.labelText}>Middle name:</Text>
                <TextInput
                    placeholder="medicinePrescribed"
                    value={formData.medicinePrescribed}
                    onChangeText={(text) => handleChange('medicinePrescribed', text)}
                    style={styles.input}
                />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.labelText}>Date of birth:</Text>
                <TextInput
                    placeholder="procedureUndertaken"
                    value={formData.procedureUndertaken}
                    onChangeText={(text) => handleChange('procedureUndertaken', text)}
                    style={styles.input}
                />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.labelText}>Home address:</Text>
                <TextInput
                    placeholder="dateofNextAppointment"
                    value={formData.dateOfNextAppointment}
                    onChangeText={(text) => handleChange('dateOfNextAppointment', text)}
                    style={styles.input}
                />
            </View>

            

            <Button title="Submit" onPress={handleFormSubmit} color="pink" />
        </ScrollView>
    );
}



export default create

const styles = StyleSheet.create({
    container: {
        padding: 16,
    },
    inputContainer: {
        marginBottom: 16,
    },
    labelText: {
        fontWeight: 'bold',
    },
    input: {
        borderWidth: 1,
        borderColor: 'pink',
        borderRadius: 4,
        paddingVertical: 8,
        paddingHorizontal: 12,
        color: "white"
    },
    button: {
        backgroundColor: 'pink',
        marginBottom: 16,
    },
});