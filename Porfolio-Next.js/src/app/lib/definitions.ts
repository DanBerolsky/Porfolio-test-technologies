export interface Proyect {
  id: string;
  name: string;
  stargazers_count: number;
  forks: number;
  description: string;
  html_url: string;
  languageColor: string;
  language: string;
}

export interface Color {
  color: string;
}

export type RepoColors = Record<string, Color>;

export enum themes {
  light = 'light',
  dark = 'dark',
}

//confing data types
export interface EducationData {
  institution: string;
  degree: string;
  date: string;
}

export interface Social {
  BasedIn: string;
  gitHub: string;
  linkedin: string;
  dev: string;
  email: string;
}

export interface Profile {
  name: string;
  description: string;
  resumenURL: string;
  avatarImageURL: string;
}

//Layout switch
export enum LayoutProyects {
  rowsLayout = 'rows',
  gridLayout = 'grid',
}