import { db } from "./firebaseConfig";
import { collection, doc, getDoc, getDocs, orderBy, query, where } from "firebase/firestore";

export const firestoreFetch = async (idCategory) => {

    let q;
    if (idCategory) {
        q = query(collection(db, "products"), where('categoryId', '==', idCategory))
    } else {
        q = query(collection(db, "products"), orderBy('titulo'));
    }

    const datos = await getDocs(q);
    const dataFromFirestore = datos.docs.map(product => ({
        id: product.id,
        ...product.data()
    }));
    return dataFromFirestore;
}

export const firestoreFetchOne = async (id) => {
    const docRef = doc(db, "products", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return {
            id: id,
            ...docSnap.data()
        }
    } else {
        console.log("¡No existe documento!")
    }
}