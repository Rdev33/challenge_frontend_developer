import { getProductData } from '../lib/api/services/productService';
import { getProductAvailability } from '../lib/api/services/productAvailabilityService';

export default async function HomePage() {
  const [productRes, availabilityRes] = await Promise.all([
    getProductData('807'),
    getProductAvailability('807'),
  ]);

  if (!productRes.ok || !availabilityRes.ok) {
    return (
      <main style={{ color: 'red' }}>
        <h1>Erro ao carregar dados</h1>
        {productRes.error?.message && (
          <p>{productRes.error.message}</p>
        )}
        {availabilityRes.error?.message && (
          <p>{availabilityRes.error.message}</p>
        )}
      </main>
    )
  }

  return (
    <main>
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