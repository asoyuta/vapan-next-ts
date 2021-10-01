import firebase from '../../../firebase/clientApp';

export default (req: any, res: any) => {
  firebase.firestore()
    .collection('articles')
    .doc(req.query.name)
    .get()
    .then((doc) => {
      res.json(doc.data());
    })
    .catch((error) => {
      res.json({ error });
    });
};