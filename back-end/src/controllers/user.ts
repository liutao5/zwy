import { Request, Response } from 'express';

const login = (req: Request, res: Response) => {
  console.log('login')
  return res.send('login')
}

export {
  login
}