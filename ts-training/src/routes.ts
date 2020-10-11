import { Request, Response } from 'express';
import createUser from './services/CreateUser'

export function helloWorld(request: Request, response: Response) {
  const user = createUser({
    email: 'otho@hotmail.com',
    password: '12345',
    techs: ['Rails', 'JS',
    {title: 'Python', experience: 6}],
  });

  return response.json({ message: 'Hello World' })
}