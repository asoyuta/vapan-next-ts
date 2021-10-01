import type { NextPage } from 'next'
import { db } from '../firebase/firebase'

const citiesRef = db.collection('cities')

citiesRef.doc('SF').set({
  name: 'San Francisco',
  state: 'CA',
  country: 'USA',
  capital: false,
  population: 860000,
  regions: ['west_coast', 'norcal'],
})
citiesRef.doc('LA').set({
  name: 'Los Angeles',
  state: 'CA',
  country: 'USA',
  capital: false,
  population: 3900000,
  regions: ['west_coast', 'socal'],
})
citiesRef.doc('DC').set({
  name: 'Washington, D.C.',
  state: null,
  country: 'USA',
  capital: true,
  population: 680000,
  regions: ['east_coast'],
})
citiesRef.doc('TOK').set({
  name: 'Tokyo',
  state: null,
  country: 'Japan',
  capital: true,
  population: 9000000,
  regions: ['kanto', 'honshu'],
})
citiesRef.doc('BJ').set({
  name: 'Beijing',
  state: null,
  country: 'China',
  capital: true,
  population: 21500000,
  regions: ['jingjinji', 'hebei'],
})

var docRef = db.collection('users').doc('KAtW7iZqFhfq0s8gHipK')

docRef
  .get()
  .then((doc) => {
    if (doc.exists) {
      console.log('Document data:', doc.data())
    } else {
      console.log('No such document!')
    }
  })
  .catch((error) => {
    console.log('Error getting document:', error)
  })

const Home: NextPage = () => {
  return <h1 className="title">This is Home!</h1>
}

export default Home
