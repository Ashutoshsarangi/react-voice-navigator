# react-voice-navigator

**Introduction**
1. This feature is designed to facilitate voice-controlled navigation in a React application. It utilizes the Web       Speech API to transcribe user's spoken words into text.
2. The application listens for specific keywords, namely "blog", "about", "contact", and "home" and "stop".
3.   When one of these keywords is recognized, the application automatically navigates to the corresponding route. For instance, if the user says "blog", the application will navigate to the "/blog" route.  Additionally, the application provides the ability to stop the speech recognition service. 
4. When the user says "Stop", the connection to the speech recognition service is terminated, effectively stopping the voice-controlled navigation. This feature enhances the user experience by providing an alternative, hands-free method of navigation.

Skills:- React, Typescript


**How to use it**

1. clone the repository

```
npm i 
```
2. It has 4 routes and 1 command now.
   1. home
   2. blog
   3. about
   4. contact
   5. stop (Command)
3. When you say these words it will route to that particular page.

   
![Voice_NavigationDemo-ezgif com-video-to-gif-converter](https://github.com/user-attachments/assets/218d704b-d08a-4ec6-ab4b-6c21145ae934)
