# II -- VALIDATION AND NAVIGATION

1. Write code to design a feedback form of an event and perform validation  
2. Design two pages with proper navigation mechanisms such as link, button, menu etc.

---

Feedback Form Mobile App  
A React Native mobile application that contains a feedback form for an event with form validation, and navigation between two pages.

---

## Installation Steps

Step 1: Clone the Repository  
```bash
git clone https://github.com/mathilika-G/FeedbackForm.git
Step 2: Create the Project (if starting fresh)
npx create-expo-app --template blank FeedbackForm

Step 3: Open in VS Code
cd FeedbackForm
code .

Step 4: Create the Folder & Files
Inside your project, create a screens folder and add:
FeedbackForm.js (feedback form page with validation)
Update your App.js to handle navigation between these pages.

Step 5: Install Required Packages
npm install @react-navigation/native
npm install @react-navigation/stack
npx expo install react-native-screens react-native-safe-area-context

Step 6: Run the App
npx expo start
