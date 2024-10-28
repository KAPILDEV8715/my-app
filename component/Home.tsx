// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity,   FlatList } from 'react-native';
// import HomeStyle from '../styles/HomeStyle';


// const Home = (props: { navigation: { navigate: (screen: string) => void } }) => {
//   const [isNavExpanded, setIsNavExpanded] = useState(false);

//   const recentActivities = [
//     { id: '1', title: 'Uploaded a new file' },
//     { id: '2', title: 'Downloaded a document' },
//     { id: '3', title: 'Updated profile' },
//   ];

//   return (
//     <View style={HomeStyle.container}>
//       {/* Profile Header */}
//       <View style={HomeStyle.header}>
//         <Text style={HomeStyle.welcomeText}>Welcome, User!</Text>
//       </View>

//       {/* Recent Activities Section */}
//       <View style={HomeStyle.activitiesContainer}>
//         <Text style={HomeStyle.sectionTitle}>Recent Activities</Text>
//         <FlatList
//           data={recentActivities}
//           keyExtractor={(item) => item.id}
//           renderItem={({ item }) => (
//             <Text style={HomeStyle.activityText}>- {item.title}</Text>
//           )}
//         />
//       </View>

//       <View style={[HomeStyle.navbar, isNavExpanded && HomeStyle.expandedNav]}>
//         <TouchableOpacity onPress={() => setIsNavExpanded(!isNavExpanded)}>
//           <Text style={HomeStyle.navButtonText}>
//             {isNavExpanded ? 'Hide Navigation' : 'Show Navigation'}
//           </Text>
//         </TouchableOpacity>

//         {isNavExpanded && (
//           <>
//             <TouchableOpacity 
//               style={HomeStyle.navButton} 
//               onPress={() => props.navigation.navigate('Registration')}>
//               <Text style={HomeStyle.navButtonText}>Add User</Text>
//             </TouchableOpacity>
            
//             <TouchableOpacity 
//               style={HomeStyle.navButton} 
//               onPress={() => props.navigation.navigate('Data')}>
//               <Text style={HomeStyle.navButtonText}>User Profiles</Text>
//             </TouchableOpacity>
            
//             <TouchableOpacity 
//               style={HomeStyle.navButton} 
//               onPress={() => props.navigation.navigate('FileUpload')}>
//               <Text style={HomeStyle.navButtonText}>Upload File</Text>
//             </TouchableOpacity>
            
//             <TouchableOpacity 
//               style={HomeStyle.navButton} 
//               onPress={() => props.navigation.navigate('FileDownload')}>
//               <Text style={HomeStyle.navButtonText}>Download File</Text>
//             </TouchableOpacity>
//           </>
//         )}
//       </View>
//     </View>
//   );
// };

// export default Home;

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, ImageBackground } from 'react-native';
import HomeStyle from '../styles/HomeStyle';

const Home = (props: { navigation: { navigate: (screen: string) => void } }) => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const recentActivities = [
    { id: '1', title: 'Uploaded a new file' },
    { id: '2', title: 'Downloaded a document' },
    { id: '3', title: 'Updated profile' },
  ];

  return (
    <ImageBackground source={require('../src/background3.jpg')} style={HomeStyle.background}>
      <View style={HomeStyle.container}>
        {/* Profile Header */}
        <View style={HomeStyle.header}>
          <Text style={HomeStyle.welcomeText}>Welcome, User!</Text>
        </View>

        {/* Recent Activities Section */}
        <View style={HomeStyle.activitiesContainer}>
          <Text style={HomeStyle.sectionTitle}>Recent Activities</Text>
          <FlatList
            data={recentActivities}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <Text style={HomeStyle.activityText}>- {item.title}</Text>
            )}
          />
        </View>

        {/* Navigation */}
        <View style={[HomeStyle.navbar, isNavExpanded && HomeStyle.expandedNav]}>
          <TouchableOpacity onPress={() => setIsNavExpanded(!isNavExpanded)}>
            <Text style={HomeStyle.navButtonText}>
              {isNavExpanded ? 'Hide Navigation' : 'Show Navigation'}
            </Text>
          </TouchableOpacity>

          {isNavExpanded && (
            <>
              <TouchableOpacity 
                style={HomeStyle.navButton} 
                onPress={() => props.navigation.navigate('Registration')}>
                <Text style={HomeStyle.navButtonText}>Add User</Text>
              </TouchableOpacity>
              
              <TouchableOpacity 
                style={HomeStyle.navButton} 
                onPress={() => props.navigation.navigate('Data')}>
                <Text style={HomeStyle.navButtonText}>User Profiles</Text>
              </TouchableOpacity>
              
              <TouchableOpacity 
                style={HomeStyle.navButton} 
                onPress={() => props.navigation.navigate('FileUpload')}>
                <Text style={HomeStyle.navButtonText}>Upload File</Text>
              </TouchableOpacity>
              
              <TouchableOpacity 
                style={HomeStyle.navButton} 
                onPress={() => props.navigation.navigate('FileDownload')}>
                <Text style={HomeStyle.navButtonText}>Download File</Text>
              </TouchableOpacity>
            </>
          )}
        </View>
      </View>
    </ImageBackground>
  );
};

export default Home;
