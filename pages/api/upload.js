// pages/api/upload.js
import nextConnect from 'next-connect';
import multer from 'multer';

const upload = multer({
  storage: multer.memoryStorage(),
});

const apiRoute = nextConnect({
  onError(error, req, res) {
    res.status(501).json({ error: `Sorry something Happened! ${error.message}` });
  },
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
});

apiRoute.use(upload.single('file'));

apiRoute.post((req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded.');
  }
  
  // Qui andrebbe implementata la logica per elaborare il CSV
  // Per ora, simuliamo una risposta di successo
  res.status(200).json({ message: 'File uploaded and processed successfully' });
});

export default apiRoute;

export const config = {
  api: {
    bodyParser: false,
  },
};
