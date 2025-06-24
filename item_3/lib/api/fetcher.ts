import { Result } from "../../types/external";

export async function fetcher<T>(
  url: string,
  options: RequestInit = {},
  token?: string
): Promise<Result<T>> {
  try {
    const res = await fetch(url, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
        ...options.headers,
      },
      next: { revalidate: 60 }
    })

    if (!res.ok) {
      const error = new Error(`Erro ${res.status}: ${res.statusText}`);
      console.error(`[ERRO DE API] ${url}`, error);

      return {
        ok: false,
        error 
      }
    }

    const data: T = await res.json();
    return {
      ok: true,
      data 
    }
  } catch (err: unknown) {
    const error = err instanceof Error ? err : new Error('Erro desconhecido');
    console.error(`[FALHA NA API] ${url}`, error);

    return {
      ok: false,
      error 
    }
  }
}