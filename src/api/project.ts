import api from "@/utils/http";
import axios from "axios";

const URL = "/api/projects";

/** create */
export interface CreateProjectRequest {
  name: string;
}

export const createProjectApi = async (
  request: CreateProjectRequest
): Promise<ProjectResponse> => {
  const { data } = await api.post(URL, request);
  return data;
};

/** query */
export interface ProjectResponse {
  id: string;
  name: string;
  created_at: string;
}

export interface QueryProjectRequest {
  current: number;
  size: number;
  name?: string;
}

export interface QueryProjectsResponse {
  total: number;
  projects: ProjectResponse[];
}

export const queryProjectApi = async (
  params: QueryProjectRequest
): Promise<QueryProjectsResponse> => {
  const { data } = await axios.get(URL, { params });
  return data;
};

/** delete */
export const deleteProjectApi = async (projectId: string): Promise<void> => {
  await api.delete(`${URL}/${projectId}`);
};

/** update */
export interface UpdateProjectRequest {
  name: string;
}
export const updateProjectApi = async (
  projectId: string,
  request: UpdateProjectRequest
): Promise<void> => {
  await api.put(`${URL}/${projectId}`, request);
};
