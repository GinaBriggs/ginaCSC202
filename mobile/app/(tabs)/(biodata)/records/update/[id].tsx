import { Button, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams } from 'expo-router';
import axios from 'axios';

const id = () => {

    const { id } = useLocalSearchParams();

    const [formData, setFormData] = useState({
        clinicDate: '',
        natureOfAilment: '',
        medicinePrescribed: '',
        procedureUndertaken: '',
        dateOfNextAppointment: ''
    });

    useEffect(() => {
        fetchRecord();
    }, [id]);

    const fetchRecord = async () => {
        try {
            const response = await axios.get(`http://10.9.116.121:3000/clinical-records/${id}`);
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
            await axios.patch(`http://10.9.116.121:3000/clinical-records/${id}`, formData);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <SafeAreaView  style={styles.container}>
            <ScrollView>

                <Text>Clinic date:
                    <TextInput
                        placeholder="yyyy/mm/dd"
                        value={formData.clinicDate}
                        onChangeText={text => handleChange('clinicDate', text)}
                    />
                </Text>
                <Text>Nature of ailment:
                    <TextInput
                        placeholder="Nature of ailment"
                        value={formData.natureOfAilment}
                        onChangeText={text => handleChange('natureOfAilment', text)}
                    />
                </Text>

                <Text>Medicine prescribed:
                    <TextInput
                        placeholder="Medicine prescribed"
                        value={formData.medicinePrescribed}
                        onChangeText={text => handleChange('medicinePrescribed', text)}
                    />
                </Text>

                <Text>Procedure undertaken:
                    <TextInput
                        placeholder="Procedure undertaken"
                        value={formData.procedureUndertaken}
                        onChangeText={text => handleChange('procedureUndertaken', text)}
                    />
                </Text>

                <Text>Date of next prescribed:
                    <TextInput
                        placeholder="Date of next prescribed"
                        value={formData.dateOfNextAppointment}
                        onChangeText={text => handleChange('dateOfNextAppointment', text)}
                    />
                </Text>
                <Button title="Submit" onPress={handleSubmit} />
            </ScrollView>
        </SafeAreaView>
    );

}

export default id

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: 'pink',
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