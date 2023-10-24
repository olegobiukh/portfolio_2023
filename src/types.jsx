export type Skill = {
  id: number;
  color: string;
  title: string;
};

export type Project = {
  id: number;
  title: string;
  demo: string;
  gh: string;
  gif: string;
  skills: Skill[];
};