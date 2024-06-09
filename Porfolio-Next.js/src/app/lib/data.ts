import { unstable_noStore as noStore } from 'next/cache';
import { type Proyect, type RepoColors } from '@/app/lib/definitions';

import repoMock from '@/app/mock/repoProyects.json';
import { repositorieMapping } from './utils';

export async function getGithubProyects(url: string): Promise<Proyect[]> {
  noStore();
  let exit: Proyect[] = [];
  const languageColorRepo: RepoColors = await getRepositorieColor();
  if (process.env.NODE_ENV === 'development') {
    exit = repositorieMapping(repoMock, languageColorRepo);
    return exit;
  }
  await fetch(url)
    .then(async (res) => {
      if (res.ok) {
        return await res.json();
      }
    })
    .then((data) => {
      if (data.length > 0) {
        exit = repositorieMapping(data, languageColorRepo);
      }
    })
    .catch(() => {});
  return exit;
}

async function getRepositorieColor() {
  const colorsUrl =
    'https://raw.githubusercontent.com/ozh/github-colors/master/colors.json';
  let exit: RepoColors = {};
  exit = await fetch(colorsUrl)
    .then(async (res) => {
      if (res.ok) {
        return await res.json();
      }
      throw new Error('Something went wrong');
    })
    .then((data) => {
      return data;
    })
    .catch((err) => {});

  return exit;
}

import configsMock from '@/app/mock/user-config.json';
export async function fetchConfig() {
  if (
    typeof process.env.NEXT_CONFIG_URL == 'string' &&
    process.env.NEXT_CONFIG_URL !== ''
  ) {
    const res = await fetch(process.env.NEXT_CONFIG_URL as string, {
      cache: 'no-cache',
    });
    const result = res.ok ? await res.json() : configsMock;
    return result;
  } else {
    return configsMock;
  }
}
import mockMeta from '@/app/mock/meta.json';
export async function fetchMeta() {
  if (process.env.NODE_ENV === 'development') {
    return mockMeta;
  }
  let exit = mockMeta;
  if (
    typeof process.env.NEXT_CONFIG_URL == 'string' &&
    process.env.NEXT_CONFIG_URL !== ''
  ){
    const res = await fetch(process.env.NEXT_META_URL as string, {
      cache: 'no-cache',
    });
    exit = await res.json()
  }
  return exit;
}

export async function fetchOG() {
  const res = await fetch(process.env.NEXT_CONFIG_URL as string, {
    cache: 'no-cache',
  });
  const result = res.ok ? await res.json() : '';
  return result;
}
