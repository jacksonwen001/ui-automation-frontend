import api from "@/utils/http";

export const PAGE_URL = "/api/pages";
/**
 * query
 */
export interface QueryPageRequest {
  name?: string;
  project_id: string;
  current: number;
  size: number;
}
export interface PageResponse {
  id: string;
  project_id: string;
  name: string;
  created_at: string;
}
export interface QueryPagesResponse {
  total: number;
  pages: PageResponse[];
}
export const queryPagesApi = async (
  params: QueryPageRequest
): Promise<QueryPagesResponse> => {
  const { data } = await api.get(PAGE_URL, { params });
  return data;
};

/**
 * add 
 */
export interface CreatePageRequest {
  project_id: string
  name: string, 
}
export const createPageApi = async (request: CreatePageRequest): Promise<void> => {
  await api.post(PAGE_URL, request)
}

/**
 * delete 
 */

export interface QueryPageUsagesResponse {
  used: boolean, 
  scenarios: string[]
}

export const queryPageUsagesApi = async (page_id: string): Promise<QueryPageUsagesResponse> => {
  const { data } = await api.get(`${PAGE_URL}/${page_id}/usages`)
  return data
}

export const deletePageApi = async (page_id: string): Promise<void> => {
  await api.delete(`${PAGE_URL}/${page_id}`)
}
