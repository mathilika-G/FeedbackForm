import React, { useState } from 'react';
import {
  View,
  Text,
  Alert,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  ImageBackground,
} from 'react-native';
import InputField from '../components/InputField';
import { FontAwesome } from '@expo/vector-icons';

const FeedbackForm = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [age, setAge] = useState('');
  const [department, setDepartment] = useState('');
  const [feedback, setFeedback] = useState('');
  const [rating, setRating] = useState(0);

  const validateForm = () => {
    if (!name.trim() || !email.trim() || !phone.trim() || !age.trim() || !department.trim() || !feedback.trim()) {
      Alert.alert('Validation Error', 'All fields are required!');
      return false;
    }

    const emailPattern = /\S+@\S+\.\S+/;
    if (!emailPattern.test(email)) {
      Alert.alert('Validation Error', 'Enter a valid email address!');
      return false;
    }

    const phonePattern = /^[0-9]{10,15}$/;
    if (!phonePattern.test(phone)) {
      Alert.alert('Validation Error', 'Enter a valid phone number (10–15 digits)!');
      return false;
    }

    const ageNum = parseInt(age);
    if (isNaN(ageNum) || ageNum < 18 || ageNum > 100) {
      Alert.alert('Validation Error', 'Enter a valid age between 18 and 100!');
      return false;
    }

    if (rating === 0) {
      Alert.alert('Validation Error', 'Please select a star rating!');
      return false;
    }

    return true;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      Alert.alert(
        'Thank You!',
        `You rated us ${rating} star(s). Your feedback has been submitted.`,
        [{ text: 'OK', onPress: () => navigation.navigate('Home') }],
        { cancelable: false }
      );

      setName('');
      setEmail('');
      setPhone('');
      setAge('');
      setDepartment('');
      setFeedback('');
      setRating(0);
    }
  };

  return (
    <ImageBackground
      source={require('../assets/background.jpg')}
      style={styles.background}
      resizeMode="cover"
    >
      <KeyboardAvoidingView
        style={styles.overlay}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView contentContainerStyle={styles.scrollView}>
          <Text style={styles.heading}> Feedback Form</Text>

          <InputField placeholder="Your Name" value={name} onChangeText={setName} />
          <InputField placeholder="Your Email" value={email} onChangeText={setEmail} keyboardType="email-address" />
          <InputField placeholder="Phone Number" value={phone} onChangeText={setPhone} keyboardType="phone-pad" />
          <InputField placeholder="Age" value={age} onChangeText={setAge} keyboardType="numeric" />
          <InputField placeholder="Department" value={department} onChangeText={setDepartment} />
          <InputField
            placeholder="Your Feedback"
            value={feedback}
            onChangeText={setFeedback}
            multiline
            numberOfLines={4}
          />

          <Text style={styles.ratingText}>Your Rating:</Text>
          <View style={styles.starsContainer}>
            {[1, 2, 3, 4, 5].map((num) => (
              <TouchableOpacity key={num} onPress={() => setRating(num)}>
                <FontAwesome
                  name={num <= rating ? 'star' : 'star-o'}
                  size={30}
                  color="#FFD700"
                />
              </TouchableOpacity>
            ))}
          </View>

          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: { flex: 1 },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    padding: 20,
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center',
  },
  ratingText: {
    color: '#fff',
    fontSize: 18,
    marginTop: 10,
    marginBottom: 5,
  },
  starsContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#00796B',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
});

export default FeedbackForm;
