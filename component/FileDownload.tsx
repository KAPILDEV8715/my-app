// import React, { useState } from 'react';
// import {
//   Text,
//   View,
//   TouchableOpacity,
//   PermissionsAndroid,
//   Platform,
//   Alert,
//   TextInput,
// } from 'react-native';
// import RNFetchBlob from 'rn-fetch-blob';
// import { useNavigation } from '@react-navigation/native';
// import FileDownloadStyle from '../styles/FileDownloadStyle';


// const FileDownload: React.FC = () => {
//   const navigation = useNavigation(); // Add this line to use navigation
//   const [fileURL, setFileURL] = useState<string>(''); 

//   const checkPermission = async (): Promise<void> => {
//     if (!fileURL) {
//       Alert.alert('Please enter a file URL');
//       return;
//     }

//     if (Platform.OS === 'ios') {
//       downloadFile(); 
//     } else {
//       try {
//         const platformVersion = Number(Platform.Version);
//         if (platformVersion >= 29) {
//           downloadFile();
//         } else {
//           const granted = await PermissionsAndroid.request(
//             PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
//             {
//               title: 'Storage Permission Required',
//               message: 'App needs access to your storage to download files',
//               buttonPositive: 'OK', 
//               buttonNegative: 'Cancel', 
//               buttonNeutral: 'Ask Me Later',
//             }
//           );
//           if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//             console.log('Storage Permission Granted.');
//             downloadFile();
//           } else {
//             Alert.alert('Storage Permission Not Granted');
//           }
//         }
//       } catch (err) {
//         console.warn(err);
//       }
//     }
//   };

//   const downloadFile = (): void => {
//     let date = new Date();
//     let file_URL = fileURL; 
//     let ext = getExtension(file_URL);

//     if (!ext) {
//       Alert.alert('Error', 'Unable to determine file extension');
//       return;
//     }

//     ext = '.' + ext; 

//     const { config, fs } = RNFetchBlob;
//     const FileDir = fs.dirs.DownloadDir;

//     const mimeType = getMimeType(ext);
//     const options = {
//       fileCache: true,
//       addAndroidDownloads: {
//         useDownloadManager: true,
//         notification: true,
//         path:
//           FileDir +
//           '/file_' +
//           Math.floor(date.getTime() + date.getSeconds() / 2) +
//           ext,
//         description: 'Downloading file...',
//         mime: mimeType,
//         mediaScannable: true,
//       },
//     };

//     config(options)
//       .fetch('GET', file_URL)
//       .then(res => {
//         console.log('res -> ', JSON.stringify(res));
//         Alert.alert('File Downloaded Successfully.');
//       })
//       .catch(err => {
//         console.error(err);
//         Alert.alert('Error downloading file');
//       });
//   };

//   const getExtension = (filename: string): string | null => {
//     const match = /[.]/.exec(filename) ? /[^.]+$/.exec(filename) : null;
//     return match ? match[0] : null;
//   };

//   const getMimeType = (ext: string): string => {
//     switch (ext) {
//       case '.pdf':
//         return 'application/pdf';
//       case '.doc':
//       case '.docx':
//         return 'application/msword';
//       case '.xls':
//       case '.xlsx':
//         return 'application/vnd.ms-excel';
//       case '.png':
//         return 'image/png';
//       case '.jpg':
//       case '.jpeg':
//         return 'image/jpeg';
//       case '.mp4':
//         return 'video/mp4';
//       case '.mp3':
//         return 'audio/mpeg';
//       default:
//         return 'application/octet-stream';
//     }
//   };

//   return (
//     <View style={FileDownloadStyle.container}>
      
//       <View style={{ alignItems: 'center' }}>
//         <Text style={{ fontSize: 30, textAlign: 'center' }}>
//           React Native File Download Example
//         </Text>
        
//         <TextInput
//           style={FileDownloadStyle.input}
//           placeholder="Enter file URL"
//           value={fileURL}
//           onChangeText={setFileURL}
//         />
//       </View>
//       <TouchableOpacity style={FileDownloadStyle.button} onPress={checkPermission}>
//         <Text style={FileDownloadStyle.text}>Download File</Text>
//       </TouchableOpacity>
    
//     <View>
//       <TouchableOpacity style={FileDownloadStyle.backButton} onPress={() => navigation.goBack()}>
//         <Text style={FileDownloadStyle.backButtonText}>Back</Text>
//       </TouchableOpacity>
//     </View>
//     </View>
    
//   );
// };

// export default FileDownload;
import React, { useState } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  PermissionsAndroid,
  Platform,
  Alert,
  TextInput,
} from 'react-native';
import RNFetchBlob from 'rn-fetch-blob';
import { useNavigation } from '@react-navigation/native';
import FileDownloadStyle from '../styles/FileDownloadStyle';


const FileDownload: React.FC = () => {
  const navigation = useNavigation();
  const [fileURL, setFileURL] = useState<string>(''); 

  const checkPermission = async (): Promise<void> => {
    if (!fileURL) {
      Alert.alert('Please enter a file URL');
      return;
    }

    // iOS permissions are not required for file downloads
    if (Platform.OS === 'ios') {
      downloadFile();
    } else {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'Storage Permission Required',
            message: 'App needs access to your storage to download files',
            buttonPositive: 'OK',
            buttonNegative: 'Cancel',
          }
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          downloadFile();
        } else {
          Alert.alert('Storage Permission Not Granted');
        }
      } catch (err) {
        console.warn(err);
      }
    }
  };

  const downloadFile = (): void => {
    let date = new Date();
    let file_URL = fileURL;
    let ext = getExtension(file_URL);

    if (!ext) {
      Alert.alert('Error', 'Unable to determine file extension');
      return;
    }

    ext = '.' + ext;
    const { config, fs } = RNFetchBlob;
    const FileDir = fs.dirs.DownloadDir; // Use the Downloads directory for Android

    const options = {
      fileCache: true,
      addAndroidDownloads: {
        useDownloadManager: true,
        notification: true,
        path: `${FileDir}/file_${Math.floor(date.getTime() + date.getSeconds() / 2)}${ext}`,
        description: 'Downloading file...',
      },
    };

    config(options)
      .fetch('GET', file_URL)
      .then((res) => {
        Alert.alert('Success', 'File Downloaded Successfully');
      })
      .catch((err) => {
        console.error('Error downloading file: ', err);
        Alert.alert('Error', 'Error downloading file');
      });
  };

  const getExtension = (filename: string): string | null => {
    const match = /[.]/.exec(filename) ? /[^.]+$/.exec(filename) : null;
    return match ? match[0] : null;
  };

  return (
    <View style={FileDownloadStyle.container}>
      <Text style={FileDownloadStyle.title}>React Native File Download</Text>
      
      <TextInput
        style={FileDownloadStyle.input}
        placeholder="Enter file URL"
        value={fileURL}
        onChangeText={setFileURL}
      />

      <TouchableOpacity style={FileDownloadStyle.button} onPress={checkPermission}>
        <Text style={FileDownloadStyle.text}>Download File</Text>
      </TouchableOpacity>

      <TouchableOpacity style={FileDownloadStyle.backButton} onPress={() => navigation.goBack()}>
        <Text style={FileDownloadStyle.backButtonText}>Back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FileDownload;
