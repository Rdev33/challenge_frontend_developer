export type Result<T> = { ok: true; data: T } | { ok: false; error: Error }

export interface Product {
  name: string
  price: number
}

export interface ProductAvailability {
  available: boolean
  distanceKm: number
}