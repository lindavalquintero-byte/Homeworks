import { useState } from "react"
import { db } from "../firebase/config"
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
  query,
  where
} from "firebase/firestore"

function useCollection(collectionName) {
  const [error, setError] = useState(null)

  const getAll = async (filters = []) => {
    try {
      let ref = collection(db, collectionName)

      if (filters.length > 0) {
        const conditions = filters.map((f) => where(f[0], f[1], f[2]))
        ref = query(ref, ...conditions)
      }

      const snapshot = await getDocs(ref)
      const docs = snapshot.docs.map((d) => ({ id: d.id, ...d.data() }))
      return docs
    } catch (err) {
      setError(err.message)
    }
  }

  const add = async (data) => {
    try {
      await addDoc(collection(db, collectionName), data)
    } catch (err) {
      setError(err.message)
    }
  }

  const update = async (id, data) => {
    try {
      const ref = doc(db, collectionName, id)
      await updateDoc(ref, data)
    } catch (err) {
      setError(err.message)
    }
  }

  const remove = async (id) => {
    try {
      const ref = doc(db, collectionName, id)
      await deleteDoc(ref)
    } catch (err) {
      setError(err.message)
    }
  }

  return { getAll, add, update, remove, error }
}

export default useCollection