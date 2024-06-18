import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UpdateBioData from './Update';
import CreateBioData from './Create';
import './readbiodata.css';

const Biodata = () => {

  const [data, setData] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [showUpdateForm, setShowUpdateForm] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3000/biodata-of-patients');
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id: any) => {
    try {
      await axios.delete(`http://localhost:3000/biodata-of-patients/${id}`);
      fetchData(); // Refetch the data after deletion
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdate = (id: any) => {
    setSelectedId(id);
    setShowUpdateForm(true);
  };
  const handleShowCreateForm = () => {
    setShowCreateForm(true);
  };
  return (
    <div className="container">
      {showCreateForm ? ( <CreateBioData /> ): showUpdateForm ? (<UpdateBioData id={selectedId}/> ) :(
        <table className="bio-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Surname</th>
              <th>Middle Name</th>
              <th>Date of Birth</th>
              <th>Home Address</th>
              <th>Date of Registration</th>
              <th>Matriculation Number</th>
              <th></th>
              <th>
                <button onClick={handleShowCreateForm}>Create</button>
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item: any) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.firstName}</td>
                <td>{item.surName}</td>
                <td>{item.middleName}</td>
                <td>{item.dateOfBirth}</td>
                <td>{item.homeAddress}</td>
                <td>{item.dateOfRegistration}</td>
                <td>{item.matriculationNumber}</td>
                <td>
                  <button onClick={() => handleUpdate(item.id)}>Update</button>
                </td>
                <td>
                  <button onClick={() => handleDelete(item.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )
      }
    </div>
  );
};

export default Biodata;