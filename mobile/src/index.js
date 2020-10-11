import React, { useEffect, useState } from 'react';
import {
  SafeAreaView, View, FlatList,
  Text, StyleSheet, StatusBar, TouchableOpacity
} from 'react-native';

import api from './services/axios';

export default function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get('projects').then(response => {
      console.log(response.data);
      setProjects(response.data);
    }
    )
  }, [])

  async function handleAddProject() {
    const response = await api.post('projects',
    {
      title: `Novo projeto ${Date.now()}`,
      owner: 'Otho Teixeira'
    });

    const project = response.data;

    setProjects([...projects, project]);
  }

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.container}>
        <FlatList
          data={projects}
          keyExtractor={project => project.id}
          renderItem={({ item: project }) => (
            < Text style={styles.projectTitle}>{project.title}</Text>
          )
          }
        />
        <TouchableOpacity
          activeOpacity={0.6}
          style={styles.button}
          onPress={handleAddProject}
        >
          <Text styles={styles.buttonText}>Adicionar</Text>
        </TouchableOpacity>
      </SafeAreaView>


      {/* <View style={styles.container}>
        <Text style={styles.title}> Hello World! </Text>
        {projects.map(project => (
          <Text style={styles.projectTitle} key={project.id}>
          {project.title}</Text>))}
      </View> */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1d7cfa'
  },

  title: {
    fontSize: 32,
    color: 'white',
    fontWeight: 'bold',
  },

  projectTitle: {
    fontSize: 24,
    color: 'white',
  },
  button: {
    backgroundColor: 'white',
    margin: 20,
    height: 50,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center'
  },

  buttonText: {
    fontWeight: 'bold',
    fontSize: 16
  }
});