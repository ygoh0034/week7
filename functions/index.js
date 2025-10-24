// functions/index.js

// ✅ Use v2 options so region actually applies
const { setGlobalOptions } = require('firebase-functions/v2/options')
const { onRequest } = require('firebase-functions/v2/https')
const { onDocumentCreated } = require('firebase-functions/v2/firestore')
const admin = require('firebase-admin')
const cors = require('cors')({ origin: true })

// Init Admin SDK
admin.initializeApp()

// ⬅️ Set this to your Firestore region exactly (e.g. 'australia-southeast1')
setGlobalOptions({ region: 'australia-southeast1', maxInstances: 10 })

/**
 * HTTP: /countBooks
 * Returns { count } for documents in 'books'
 */
exports.countBooks = onRequest((req, res) => {
  cors(req, res, async () => {
    try {
      const snap = await admin.firestore().collection('books').get()
      res.status(200).send({ count: snap.size })
    } catch (err) {
      console.error('Error counting books:', err.message)
      res.status(500).send('Error counting books')
    }
  })
})


exports.capitalizeBookName = onDocumentCreated('books/{bookId}', async (event) => {
  const snap = event.data
  if (!snap) return

  const data = snap.data() || {}
  const name = data.name
  if (!name) return

  const upper = String(name).toUpperCase()
  if (upper === name) {
    console.log('Already uppercase, skipping:', snap.ref.path)
    return
  }

  console.log('Uppercasing name for doc:', snap.ref.path, '->', upper)
  await admin.firestore().doc(snap.ref.path).update({ name: upper })
})
