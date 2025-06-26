import { cookies } from 'next/headers';

export async function getAccessToken() {
  const cookieStore = await cookies();
  const token = cookieStore.get('token')?.value;
  
  if (!token) {
    console.log('Usuário não autenticado.');
    return;
  }

  return token;
}