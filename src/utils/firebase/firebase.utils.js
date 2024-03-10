/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
	getAuth,
	signInWithRedirect,
	signInWithPopup,
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	onAuthStateChanged,
} from "firebase/auth";
import {
	getFirestore,
	doc,
	getDoc,
	setDoc,
	collection,
	writeBatch,
	query,
	getDocs,
} from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
import { firebaseConfig } from "./firebaseConfig";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
	prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGooglePopup = () =>
	signInWithPopup(auth, googleProvider);

export const signInWithGoogleRedirect = () =>
	signInWithRedirect(auth, googleProvider);

export const database = getFirestore();

export const addCollectionAndDocs = async (collKey, addedObjects, field) => {
	const collRef = collection(database, collKey);
	const batch = writeBatch(database);

	addedObjects.forEach((v) => {
		const docRef = doc(collRef, v.title.toLowerCase());
		batch.set(docRef, v);
	});

	await batch.commit();
};

// get categories from documents here

export const createUserDocFromAuth = async (uAuth, additionalInfo = {}) => {
	if (!uAuth) return;

	const userDocRef = doc(database, "users", uAuth.uid);
	const userSnapshot = await getDoc(userDocRef);

	if (!userSnapshot.exists()) {
		const { displayName, email } = uAuth;
		const createdAt = new Date();

		try {
			await setDoc(userDocRef, {
				displayName,
				email,
				createdAt,
				...additionalInfo,
			});
		} catch (error) {
			alert("Error creating user. ", error.message);
		}
	}
	return userSnapshot;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
	if (!email || !password) return;

	return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
	if (!email || !password) return;

	return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) =>
	onAuthStateChanged(auth, callback);

export const getCurrentUser = () => {
	return new Promise((resolve, reject) => {
		const unsubscribe = onAuthStateChanged(
			auth,
			(userAuth) => {
				unsubscribe();
				resolve(userAuth);
			},
			reject
		);
	});
};
