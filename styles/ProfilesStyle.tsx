import { StyleSheet } from 'react-native';

const ProfilesStyle = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 139, 0.6)', // Semi-transparent dark overlay for readability
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  item: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: 'rgba(255, 255, 255, 0.2)', // Semi-transparent white for item background
    borderRadius: 8,
  },
  itemText: {
    color: '#FFFFFF',
    fontSize: 16,
    marginBottom: 5,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  backButton: {
    alignSelf: 'center',
    padding: 12,
    backgroundColor: '#1E88E5', // Dodger blue for the back button
    borderRadius: 8,
    marginTop: 30,
    width: '50%',
  },
  backButtonText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProfilesStyle;
