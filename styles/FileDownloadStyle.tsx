import { StyleSheet } from 'react-native';

const FileDownloadStyle = StyleSheet.create({
  container: {
    paddingTop: 150,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E3F2FD',    
  },
  backButton: {
    width: '100%',
    backgroundColor: '#0D47A1', 
    padding: 15,
    alignItems: 'center',
  },
  backButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  button: {
    width: '80%',
    padding: 12,
    backgroundColor: '#1976D2', 
    margin: 15,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#1565C0',
  },
  text: {
    color: '#FFFFFF',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: '#1565C0',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 30,
    color: '#0D47A1', // dark blue for title text
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default FileDownloadStyle;
