// pages/api/upload.ts
import nextConnect from 'next-connect';
import multer from 'multer';
import type { NextApiRequest, NextApiResponse } from 'next';

interface ExtendedNextApiRequest extends NextApiRequest {
  file: any;  // Aggiungi una definizione di tipo più specifica se necessario
}

const upload = multer({
  storage: multer.memoryStorage(),
});

const apiRoute = nextConnect({
  onError(error: Error, req: ExtendedNextApiRequest, res: NextApiResponse) {
    res.status(501).json({ error: `Sorry something Happened! ${error.message}` });
  },
  onNoMatch(req: ExtendedNextApiRequest, res: NextApiResponse) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
});

apiRoute.use(upload.single('file'));

apiRoute.post((req: ExtendedNextApiRequest, res: NextApiResponse) => {
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
