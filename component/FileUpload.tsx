import React, { useState, useEffect } from 'react';
import { View, Text, Alert, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import DocumentPicker, { DocumentPickerResponse } from 'react-native-document-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FileUploadStyle from '../styles/FileUploadStyle';

const FileUpload: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [fileResponses, setFileResponses] = useState<DocumentPickerResponse[]>([]);
  const [uploadedFiles, setUploadedFiles] = useState<{ name: string; url: string; type: string }[]>([]);

  const handleDocumentSelection = async () => {
    try {
      const results = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
        allowMultiSelection: true,
      });
      setFileResponses(results);
    } catch (err) {
      if (!DocumentPicker.isCancel(err)) {
        Alert.alert('Error', 'An unknown error occurred');
        console.error('Document picker error:', err);
      }
    }
  };

  const uploadFiles = async () => {
    if (fileResponses.length === 0) {
      Alert.alert('Please select at least one file');
      return;
    }

    const uploadedFileData = fileResponses.map(file => ({
      name: file.name,
      url: file.uri,
      type: file.type || 'unknown',
    }));

    try {
      await AsyncStorage.setItem('uploadedFiles', JSON.stringify(uploadedFileData));
      Alert.alert('Files uploaded successfully');
      fetchUploadedFiles();
    } catch (error) {
      console.error('Upload error:', error);
      Alert.alert('Upload error', 'Something went wrong');
    }
  };

  const fetchUploadedFiles = async () => {
    const storedFiles = await AsyncStorage.getItem('uploadedFiles');
    if (storedFiles) {
      setUploadedFiles(JSON.parse(storedFiles));
    } else {
      setUploadedFiles([]);
    }
  };

  useEffect(() => {
    fetchUploadedFiles();
  }, []);

  return (
    <ImageBackground source={require('../src/background.jpg')} style={FileUploadStyle.background}>
      <View style={FileUploadStyle.overlay}>

        <TouchableOpacity style={FileUploadStyle.button} onPress={handleDocumentSelection}>
          <Text style={FileUploadStyle.buttonText}>Select Files</Text>
        </TouchableOpacity>

        <Text style={FileUploadStyle.sectionTitle}>Selected Files:</Text>
        <ScrollView>
          {fileResponses.length > 0 ? (
            fileResponses.map((file, index) => (
              <View key={index} style={FileUploadStyle.fileInfo}>
                <Text style={FileUploadStyle.fileText}>File: {file.name}</Text>
                <Text style={FileUploadStyle.fileText}>Type: {file.type || 'unknown'}</Text>
              </View>
            ))
          ) : (
            <Text style={FileUploadStyle.fileText}>No files selected</Text>
          )}
        </ScrollView>

        <TouchableOpacity
          style={FileUploadStyle.button}
          onPress={uploadFiles}
          disabled={fileResponses.length === 0}
        >
          <Text style={FileUploadStyle.buttonText}>Upload Files</Text>
        </TouchableOpacity>

        <Text style={FileUploadStyle.sectionTitle}>Uploaded Files:</Text>
        <ScrollView>
          {uploadedFiles.length > 0 ? (
            uploadedFiles.map((file, index) => (
              <View key={index} style={FileUploadStyle.fileInfo}>
                <Text style={FileUploadStyle.fileText}>File Name: {file.name}</Text>
                <Text style={FileUploadStyle.fileText}>File Type: {file.type}</Text>
              </View>
            ))
          ) : (
            <Text style={FileUploadStyle.fileText}>No uploaded files available</Text>
          )}
        </ScrollView>
        {/* Back Button */}
        <TouchableOpacity style={FileUploadStyle.backButton} onPress={() => navigation.goBack()}>
          <Text style={FileUploadStyle.backButtonText}>Back</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default FileUpload;
