import { StyleSheet } from 'react-native';

const HomeStyle = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'rgba(0, 0, 139, 0.6)', // Dark blue overlay for text clarity
  },
  header: {
    marginTop: 50,
    marginBottom: 20,
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textShadowColor: '#000080', // Navy shadow for depth
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  activitiesContainer: {
    marginBottom: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.2)', // Semi-transparent light background for activities section
    borderRadius: 10,
    padding: 15,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 10,
    textAlign: 'center',
  },
  activityText: {
    fontSize: 16,
    color: '#FFFFFF',
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  navbar: {
    marginTop: 20,
    alignItems: 'center',
  },
  expandedNav: {
    paddingTop: 10,
  },
  navButton: {
    backgroundColor: '#1E90FF', // Dodger blue for nav buttons
    padding: 12,
    borderRadius: 8,
    marginVertical: 5,
    width: '80%',
    shadowColor: '#000', // Shadow for nav button elevation
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5, // Android shadow
  },
  navButtonText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HomeStyle;
