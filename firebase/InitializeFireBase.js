import  { initializeApp } from 'firebase/app';


const firebaseConfig = {
    apiKey: "AIzaSyBed_ZsXdQHf_X8UnyS82t28j-Cn-urY04",
  authDomain: "mealstogo-e281c.firebaseapp.com",
  projectId: "mealstogo-e281c",
  storageBucket: "mealstogo-e281c.appspot.com",
  messagingSenderId: "239650874123",
  appId: "1:239650874123:web:553360178ee9d7e1b1380e",
  measurementId: "G-LLGWYE3MYW"
};
  
export const initializeFireBase = () => {
    
  
    initializeApp(firebaseConfig);
  
}