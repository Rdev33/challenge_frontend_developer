import { fetcher } from '../fetcher';
import { getAccessToken } from '../../../middlewares/auth';
import { Product } from '../../../types/external';
import { Result } from '../../../types/external';

export async function getProductData(id: string): Promise<Result<Product>> {
  const token = await getAccessToken();

  return fetcher<Product>(
    `https://api.externa.com/product/${id}`,
    {},
    token
  );
}