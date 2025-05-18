import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  ScrollView,
} from 'react-native';
import React, { useEffect } from 'react';
import ScreenWrapper from '../components/ScreenWrapper';
import { images } from '@/constants/images';
import { Inter_900Black, useFonts } from '@expo-google-fonts/inter';
import { ShareTech_400Regular } from '@expo-google-fonts/share-tech';
import * as SplashScreen from 'expo-splash-screen';
import { icons } from '@/constants/icons';
import { useRouter } from 'expo-router';

SplashScreen.preventAutoHideAsync();

const { width, height } = Dimensions.get('window');

const Welcome = () => {
  const router = useRouter();

  const [loaded, error] = useFonts({
    Inter_900Black,
    ShareTech_400Regular,
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) return null;

  return (
    <ScreenWrapper>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.container}>

          <ImageBackground
            source={images.pawBg}
            style={styles.background}
            imageStyle={{ opacity: 0.15 }}
            resizeMode="cover"
          >
            <Text style={styles.title}>FurEverCare</Text>
          </ImageBackground>

          <Image
            source={images.petImg1}
            style={styles.petImage}
            resizeMode="cover"
          />

          <View style={styles.content}>
            <Text style={styles.subTitle}>
              Your companion in animal Rescue & Care.
            </Text>

            <TouchableOpacity
              style={[styles.button, styles.petLoverButton]}
              onPress={() => router.push('/auth/Login')}
            >
              <View style={styles.row}>
                <Image source={icons.petLove} style={styles.icon} />
                <Text style={styles.buttonText}>I'm a Pet Lover →</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.button, styles.rescueButton]}
              onPress={() => router.push('/auth/rescueLogin')}
            >
              <View style={styles.row}>
                <Image source={icons.petRescue} style={styles.icon} />
                <Text style={styles.buttonText}>I'm a Rescuer →</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  background: {
    width: '100%',
    height: height * 0.25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Inter_900Black',
    fontSize: 34,
    color: '#065f46',
    marginTop: 10,
  },
  petImage: {
    width: width * 0.85,
    height: height * 0.4,
    borderTopLeftRadius: 300,
    borderTopRightRadius: 300,
    borderBottomLeftRadius: 400,
    borderBottomRightRadius: 400,
    marginTop: -40,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 8,
  },
  content: {
    marginTop: 20,
    width: '90%',
    alignItems: 'center',
    paddingBottom: 30,
  },
  subTitle: {
    fontFamily: 'ShareTech_400Regular',
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 30,
    color: '#1f2937',
  },
  button: {
    width: '100%',
    height: 60,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  petLoverButton: {
    backgroundColor: '#fbcfe8',
  },
  rescueButton: {
    backgroundColor: '#fde68a',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#374151',
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
