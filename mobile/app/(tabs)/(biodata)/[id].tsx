import { Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams } from 'expo-router';
import axios from 'axios';

const id = () => {

    const { id } = useLocalSearchParams();

    const [formData, setFormData] = useState({
        firstName: '',
        surName: '',
        middleName: '',
        dateOfBirth: '',
        homeAddress: '',
        dateOfRegistration: '',
        matriculationNumber: '21120612475', // Default value
    });

    useEffect(() => {
        fetchRecord();
    }, [id]);

    const fetchRecord = async () => {
        try {
            const response = await axios.get(`http://10.9.116.121:3000/biodata-of-patients/${id}`);
            setFormData(response.data);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const handleChange = (name: any, value: any) => {
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async () => {
        try {
            await axios.patch(`http://172.20.10.2:3000/biodata-of-patients/${id}`, formData);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.inputContainer}>
                <Text style={styles.labelText}>First name:</Text>
                <TextInput
                    placeholder="First name"
                    value={formData.firstName}
                    onChangeText={(text) => handleChange('firstName', text)}
                    style={styles.input}
                />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.labelText}>Surname:</Text>
                <TextInput
                    placeholder="Surname"
                    value={formData.surName}
                    onChangeText={(text) => handleChange('surName', text)}
                    style={styles.input}
                />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.labelText}>Middle name:</Text>
                <TextInput
                    placeholder="Middle name"
                    value={formData.middleName}
                    onChangeText={(text) => handleChange('middleName', text)}
                    style={styles.input}
                />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.labelText}>Date of birth:</Text>
                <TextInput
                    placeholder="yyyy/mm/dd"
                    value={formData.dateOfBirth}
                    onChangeText={(text) => handleChange('dateOfBirth', text)}
                    style={styles.input}
                />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.labelText}>Home address:</Text>
                <TextInput
                    placeholder="Home address"
                    value={formData.homeAddress}
                    onChangeText={(text) => handleChange('homeAddress', text)}
                    style={styles.input}
                />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.labelText}>Date of registration:</Text>
                <TextInput
                    placeholder="yyyy/mm/dd"
                    value={formData.dateOfRegistration}
                    onChangeText={(text) => handleChange('dateOfRegistration', text)}
                    style={styles.input}
                />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.labelText}>Matriculation number:</Text>
                <TextInput
                    value={formData.matriculationNumber}
                    onChangeText={(text) => handleChange('matriculationNumber', text)}
                    keyboardType="numeric"
                    style={styles.input}
                />
            </View>

            <Button title="Submit" onPress={handleSubmit} color="pink" />
        </ScrollView>
    );

}

export default id

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
        height: 40,
        paddingHorizontal: 8,
        marginBottom: 12,
        color: "white"
    },
    button: {
        backgroundColor: 'pink',
    },
});