import { getProductData } from '../lib/api/services/productService';
import { getProductAvailability } from '../lib/api/services/productAvailabilityService';

export default async function HomePage() {
  const [productRes, availabilityRes] = await Promise.all([
    getProductData('807'),
    getProductAvailability('807'),
  ]);

  if (!productRes.ok || !availabilityRes.ok) {
    return (
      <main className="p-4 text-red-600">
        <h1>Erro ao carregar dados</h1>
        <p>{productRes.error?.message || availabilityRes.error?.message}</p>
      </main>
    )
  }

  return (
    <main className="p-4">
      <h1>{productRes.data?.name}</h1>
      <p>Preço: R$ {productRes.data?.price}</p>
      <p>
        Disponível em lojas próximas: 
        {availabilityRes.data?.available
          ? `Sim, distância: ${availabilityRes.data?.distanceKm}km`
          : 'Não'}
      </p>
    </main>
  )
}