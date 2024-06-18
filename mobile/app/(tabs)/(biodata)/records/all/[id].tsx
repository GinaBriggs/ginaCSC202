import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList, SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import axios from 'axios';
import { Stack, router, useLocalSearchParams } from 'expo-router';

const ReadClinicalRecord = () => {
  const { id } = useLocalSearchParams();
  const [data, setData] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [showRead, setShowRead] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://10.9.116.121:3000/clinical-records`);
      console.log(id)
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id:any) => {
    try {
      await axios.delete(`http://10.9.116.121:3000/clinical-records/${id}`);
      fetchData(); // Refetch the data after deletion
    } catch (error) {
      console.error(error);
    }
  };

  

  return (
    <SafeAreaView style={styles.container}>

      <Stack>
        <Stack.Screen name={`${id}`} options={{headerRight: (() => <Button title='Add new record' onPress={() => router.navigate(`records/create/${id}`)}/>)}}/>
      </Stack>
      <ScrollView>
        <View>
          <FlatList
            data={data}
            keyExtractor={(item:any) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.listItem}>
                <Text style={styles.idText}>ID: {item.id}</Text>
                <Text style={styles.labelText}>Clinic Date: {item.clinicDate}</Text>
                <Text style={styles.labelText}>Nature of Ailment: {item.natureOfAilment}</Text>
                <Text style={styles.labelText}>Medicine Prescribed: {item.medicinePrescribed}</Text>
                <Text style={styles.labelText}>Procedure Undertaken: {item.procedureUndertaken}</Text>
                <Text style={styles.labelText}>Date of Next Appointment: {item.dateOfNextAppointment}</Text>
                <Button onPress={() => router.replace(`/records/update/${item.id}`)} title="Update" color="pink" />
                <Button onPress={() => handleDelete(item.id)} title="Delete" color="pink" />
              </View>
            )}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
    container: {
      padding: 16,
      flex: 1,
      backgroundColor: "white"
    },
    button: {
      marginBottom: 8,
      backgroundColor: 'pink',
    },
    listItem: {
      marginBottom: 8,
    },
    idText: {
      fontWeight: 'bold',
    },
    labelText: {
      fontWeight: 'bold',
      marginBottom: 4,
    },
  });
export default ReadClinicalRecord;
