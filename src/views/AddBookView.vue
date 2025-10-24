<template>
  <div class="container">
    <h1>Add Book</h1>

    <form @submit.prevent="addBook" class="form">
      <div class="field">
        <label for="isbn">ISBN</label>
        <input id="isbn" v-model="isbn" type="text" required />
      </div>

      <div class="field">
        <label for="name">Name</label>
        <input id="name" v-model="name" type="text" required />
      </div>

      <button type="submit">Add Book</button>
    </form>

    <h3>Latest Books</h3>
    <ul>
      <li v-for="b in books" :key="b.id">ISBN: {{ b.isbn }} — NAME: {{ b.name }}</li>
    </ul>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import db from '../firebase/init.js'
import {
  collection,
  query,
  orderBy,
  limit,
  onSnapshot,
  addDoc,
  serverTimestamp,
} from 'firebase/firestore'

export default {
  name: 'AddBookView',
  setup() {
    const isbn = ref('')
    const name = ref('')
    const books = ref([])

    // Live list: newest first (no composite index needed)
    onMounted(() => {
      const q = query(collection(db, 'books'), orderBy('createdAt', 'desc'), limit(5))
      onSnapshot(q, (snap) => {
        books.value = snap.docs.map((d) => ({ id: d.id, ...d.data() }))
      })
    })

    const addBook = async () => {
      const n = Number(isbn.value)
      if (Number.isNaN(n)) {
        alert('ISBN must be a valid number')
        return
      }
      try {
        await addDoc(collection(db, 'books'), {
          isbn: n,
          name: name.value,
          createdAt: serverTimestamp(), // supports simple orderBy
        })
        isbn.value = ''
        name.value = ''
        alert('Book added successfully!')
      } catch (err) {
        console.error('Error adding book:', err)
        alert('Write failed—check console')
      }
    }

    return { isbn, name, books, addBook }
  },
}
</script>

<style scoped>
.container {
  max-width: 560px;
  margin: 24px auto;
  padding: 16px;
}
.form {
  display: grid;
  gap: 12px;
  margin: 12px 0 20px;
}
.field {
  display: grid;
  gap: 6px;
}
input {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 6px;
}
button {
  padding: 10px 14px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
}
ul {
  padding-left: 18px;
}
</style>
