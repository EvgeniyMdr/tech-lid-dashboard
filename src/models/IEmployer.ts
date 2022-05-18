export interface IEmployer {
  id: string;
  avatar: string;
  currentProject: string;
  name: string;
  positionAtWork: string;
  projects: {
    id: number;
    text: string;
  }[];
  skills: {
    id: number;
    text: string;
  }[];
}
