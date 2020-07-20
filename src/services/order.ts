import Order from 'interfaces/models/order';
import { IPaginationParams, IPaginationResponse } from 'interfaces/pagination';
import { Observable } from 'rxjs';

import apiService, { ApiService } from './api';

export class OrderService {
  constructor(private apiService: ApiService) {}

  public list(params: IPaginationParams): Observable<IPaginationResponse<Order>> {
    return this.apiService.get('/order', params);
  }

  public save(model: Partial<Order>): Observable<Order> {
    model.quantity = parseInt(model.quantity.toString());
    model.value = parseFloat(model.value.toString());
    return this.apiService.post('/order', model);
  }
}

const orderService = new OrderService(apiService);
export default orderService;
