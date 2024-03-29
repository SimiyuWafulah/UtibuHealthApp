import React, { useEffect, useState } from 'react';
import { Table } from 'flowbite-react';
import { Link } from 'react-router-dom';

export default function DashMedication() {
  const [medications, setMedications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMedications = async () => {
      try {
        const res = await fetch('http://localhost:3000/api/medications');
        const data = await res.json();
        if (res.ok) {
          setMedications(data.medications);
        }
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMedications();
  }, []);

  return (
    <div className="table-auto overflow-x-scroll md:mx-auto p-3 scrollbar-track-slate-100 scrollbar-thumb-slate-300 dark:scrollbar-track=slate-700 dark:scrollbar-thumb-slate-300">
      {loading ? (
        <p className="text-center">Loading medications...</p>
      ) : (
        <>
          <Table hoverable className="shadow-md">
            <Table.Head>
              <Table.HeadCell>Name</Table.HeadCell>
              <Table.HeadCell>Description</Table.HeadCell>
              <Table.HeadCell>Quantity</Table.HeadCell>
              <Table.HeadCell>Manufacturer</Table.HeadCell>
              <Table.HeadCell>Expiry Date</Table.HeadCell>
            </Table.Head>
            {medications && medications.map((medication) => (
              <Table.Body key={medication._id} className="divide-y">
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell>{medication.name}</Table.Cell>
                  <Table.Cell>{medication.description}</Table.Cell>
                  <Table.Cell>{medication.quantity}</Table.Cell>
                  <Table.Cell>{medication.manufacturer}</Table.Cell>
                  <Table.Cell>{new Date(medication.expiryDate).toLocaleDateString()}</Table.Cell>
                </Table.Row>
              </Table.Body>
            ))}
          </Table>
        </>
      )}
    </div>
  );
}
