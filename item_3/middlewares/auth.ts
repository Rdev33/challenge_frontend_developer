import { cookies } from 'next/headers';

export function getAccessToken() {
  const token = cookies().get('token')?.value;
  
  if (!token) {
    console.log('Usuário não autenticado.');
    return;
  }

  return token;
}