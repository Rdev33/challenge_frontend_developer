import { fetcher } from '../fetcher';
import { getAccessToken } from '../../../middlewares/auth';
import { ProductAvailability } from '../../../types/external';
import { Result } from '../../../types/external';

export async function getProductAvailability(id: string): Promise<Result<ProductAvailability>> {
  const token = getAccessToken();

  return fetcher<ProductAvailability>(
    `https://api.externa.com/product-availability/${id}`,
    {},
    token
  );
}