import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput } from 'react-native';

const HomeScreen = () => {
  // Dummy data for medication products
  const products = [
    { id: 1, name: 'Lisinopril', category: 'Hypertension', description: 'Lorem ipsum dolor sit amet', price: '$10.00' },
    { id: 2, name: 'Amlodipine', category: 'Hypertension', description: 'Lorem ipsum dolor sit amet', price: '$15.00' },
    { id: 3, name: 'Metformin', category: 'Diabetes', description: 'Lorem ipsum dolor sit amet', price: '$20.00' },
    { id: 4, name: 'Insulin', category: 'Diabetes', description: 'Lorem ipsum dolor sit amet', price: '$25.00' },
    { id: 5, name: 'Albuterol', category: 'Asthma', description: 'Lorem ipsum dolor sit amet', price: '$30.00' },
    { id: 6, name: 'Ibuprofen', category: 'Arthritis', description: 'Lorem ipsum dolor sit amet', price: '$5.00' },
    { id: 7, name: 'Acetaminophen', category: 'Arthritis', description: 'Lorem ipsum dolor sit amet', price: '$7.00' },
    { id: 8, name: 'Hydroxychloroquine', category: 'Arthritis', description: 'Lorem ipsum dolor sit amet', price: '$12.00' },
    { id: 9, name: 'Epoetin', category: 'Chronic Kidney Disease', description: 'Lorem ipsum dolor sit amet', price: '$18.00' },
    { id: 10, name: 'Calcitriol', category: 'Chronic Kidney Disease', description: 'Lorem ipsum dolor sit amet', price: '$22.00' },
    { id: 11, name: 'Tiotropium', category: 'Chronic Obstructive Pulmonary Disease (COPD)', description: 'Lorem ipsum dolor sit amet', price: '$28.00' },
    { id: 12, name: 'Carvedilol', category: 'Congestive Heart Failure', description: 'Lorem ipsum dolor sit amet', price: '$32.00' },
    { id: 13, name: 'Alendronate', category: 'Osteoporosis', description: 'Lorem ipsum dolor sit amet', price: '$15.00' },
    { id: 14, name: 'Methotrexate', category: 'Rheumatoid Arthritis', description: 'Lorem ipsum dolor sit amet', price: '$27.00' },
    { id: 15, name: 'Adalimumab', category: 'Crohn\'s Disease', description: 'Lorem ipsum dolor sit amet', price: '$35.00' },
    // Add more products here
  ];
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>Utibu Health</Text>
        <TextInput
          style={styles.searchBar}
          placeholder="Search medications"
          placeholderTextColor="#666"
        />
      </View>
      <Text style={styles.featuredTitle}>Featured Meds</Text>
      <ScrollView style={styles.content}>
        <View style={styles.grid}>
          {products.map(product => (
            <TouchableOpacity key={product.id} style={styles.productItem}>
              <Text style={styles.productImage}>Alt</Text>
              <Text style={styles.productAltText}>{product.name}</Text>
              <Text style={styles.productDescription}>{product.description}</Text>
              <Text style={styles.productPrice}>{product.price}</Text>
              <TouchableOpacity style={styles.buyButton}>
                <Text style={styles.buyButtonText}>Buy Now</Text>
              </TouchableOpacity>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
      <View style={styles.tabBar}>
        <TouchableOpacity style={styles.tabButton}>
          <Text>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabButton}>
          <Text>Cart</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabButton}>
          <Text>Orders</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 20,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    zIndex: 1,
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  searchBar: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    paddingHorizontal: 15,
    marginLeft: 20,
  },
  featuredTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    paddingHorizontal: 20,
    marginTop: 20,
    marginBottom: 10,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  productImage: {
    width: '100%',
    height: 150,
    backgroundColor: '#ddd',
    marginBottom: 10,
    textAlign: 'center',
    lineHeight: 150,
    fontSize: 20,
  },
  productItem: {
    width: '48%',
    marginBottom: 20,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  productAltText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  productDescription: {
    fontSize: 14,
    marginBottom: 5,
    color: '#666',
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2ecc71',
  },
  buyButton: {
    backgroundColor: '#3498db',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
    alignItems: 'center',
  },
  buyButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    paddingVertical: 10,
    backgroundColor: '#fff',
  },
  tabButton: {
    alignItems: 'center',
  },
});

export default HomeScreen;
