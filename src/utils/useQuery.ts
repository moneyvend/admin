import { QueryClient } from 'react-query';

class UseQueryHelper {
    queryClient: QueryClient;
    constructor() {
      this.queryClient = new QueryClient();
    }
}
const useQueryHelper = new UseQueryHelper();
export default  useQueryHelper;