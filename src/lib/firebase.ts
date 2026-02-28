import { initializeApp } from 'firebase/app';
import { getDatabase, ref, push, onValue, off } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyBp3UpwgfqkWDzzkMxvbsnP7N7i1W10A_Q",
  authDomain: "madarsa-fc572.firebaseapp.com",
  databaseURL: "https://madarsa-fc572-default-rtdb.firebaseio.com",
  projectId: "madarsa-fc572",
  storageBucket: "madarsa-fc572.firebasestorage.app",
  messagingSenderId: "106660934459",
  appId: "1:106660934459:web:5a51ef5139b7bc27e9bd1e"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);

// Contact Form Functions
export const submitContactForm = async (data: {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}) => {
  try {
    const contactsRef = ref(db, 'contacts');
    await push(contactsRef, {
      ...data,
      createdAt: new Date().toISOString(),
      status: 'new'
    });
    return { success: true };
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return { success: false, error };
  }
};

export const getContactSubmissions = (callback: (data: any[]) => void) => {
  const contactsRef = ref(db, 'contacts');
  
  onValue(contactsRef, (snapshot) => {
    const data = snapshot.val();
    if (data) {
      const submissions = Object.entries(data).map(([id, value]: [string, any]) => ({
        id,
        ...value,
      }));
      // Sort by createdAt descending
      submissions.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
      callback(submissions);
    } else {
      callback([]);
    }
  });

  // Return unsubscribe function
  return () => off(contactsRef);
};

// Admission Form Functions
export const submitAdmissionForm = async (data: {
  studentName: string;
  fatherName: string;
  dob: string;
  gender: string;
  phone: string;
  email: string;
  address: string;
  program: string;
  previousSchool: string;
  previousClass: string;
}) => {
  try {
    const admissionsRef = ref(db, 'admissions');
    await push(admissionsRef, {
      ...data,
      createdAt: new Date().toISOString(),
      status: 'pending'
    });
    return { success: true };
  } catch (error) {
    console.error('Error submitting admission form:', error);
    return { success: false, error };
  }
};

export const getAdmissionSubmissions = (callback: (data: any[]) => void) => {
  const admissionsRef = ref(db, 'admissions');
  
  onValue(admissionsRef, (snapshot) => {
    const data = snapshot.val();
    if (data) {
      const submissions = Object.entries(data).map(([id, value]: [string, any]) => ({
        id,
        ...value,
      }));
      // Sort by createdAt descending
      submissions.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
      callback(submissions);
    } else {
      callback([]);
    }
  });

  // Return unsubscribe function
  return () => off(admissionsRef);
};
