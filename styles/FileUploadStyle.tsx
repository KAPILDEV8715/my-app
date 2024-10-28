import { StyleSheet } from 'react-native';

const FileUploadStyle = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent overlay
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  container: {
    flex: 1,
    padding: 20,
  },
  backButton: {
    // alignSelf: 'flex-start',
    backgroundColor: '#1E88E5',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
    textAlign:'center',
    marginBottom: 20,
  },
  backButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign:'center',
  },
  button: {
    backgroundColor: '#1E88E5', // Blue button color
    padding: 12,
    borderRadius: 8,
    marginBottom: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 24,
    color: '#FFFFFF',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  fileInfo: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)', // Semi-transparent for file info
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  fileText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});

export default FileUploadStyle;
