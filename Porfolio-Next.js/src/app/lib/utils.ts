import { type Proyect, type RepoColors } from './definitions'

export const generatePagination = (currentPage: number, totalPages: number) => {
  // If the total number of pages is 7 or less,
  // display all pages without any ellipsis.
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1)
  }

  // If the current page is among the first 3 pages,
  // show the first 3, an ellipsis, and the last 2 pages.
  if (currentPage <= 3) {
    return [1, 2, 3, '...', totalPages - 1, totalPages]
  }

  // If the current page is among the last 3 pages,
  // show the first 2, an ellipsis, and the last 3 pages.
  if (currentPage >= totalPages - 2) {
    return [1, 2, '...', totalPages - 2, totalPages - 1, totalPages]
  }

  // If the current page is somewhere in the middle,
  // show the first page, an ellipsis, the current page and its neighbors,
  // another ellipsis, and the last page.
  return [
    1,
    '...',
    currentPage - 1,
    currentPage,
    currentPage + 1,
    '...',
    totalPages
  ]
}

export const sliceReposPerPage = (
  repositories: Proyect[] = [],
  totalPages: number = 0,
  repoPerPage: number = 4
) => {
  let newRepoPerPage : Proyect[][] = []
  if (totalPages !== 0 && repositories != ([])) {
    let sliceStart = 0
    let sliceEnd = repoPerPage
    let i = 1
    while (i <= totalPages) {
      newRepoPerPage= [...newRepoPerPage,repositories.slice(sliceStart, sliceEnd)]
      sliceStart = sliceEnd
      sliceEnd = (sliceEnd + repoPerPage < repositories.length) ? (sliceEnd + repoPerPage) : (repositories.length )
      i++
    }
  }
  return newRepoPerPage
}

export function fixCurrentPage ({ currentPage, totalPages }: { currentPage: number, totalPages: number }) {
  let currentPageFixed = currentPage
  if (!currentPage || currentPage < 0) { currentPageFixed = 1 }
  if (currentPage > totalPages) { currentPageFixed = totalPages }
  return currentPageFixed
}

export function repositorieMapping (data: any[], languageColorRepo: RepoColors): Proyect[] {
  return data.map((proyectAux: Proyect) => {
    let language: string | undefined = proyectAux.language
    let color: string
    (typeof language !== 'string') ? (language = '', color = 'transparent') : (color = languageColorRepo[language].color)
    const proyect: Proyect = {
      id: proyectAux.id,
      name: proyectAux.name,
      stargazers_count: proyectAux.stargazers_count,
      forks: proyectAux.forks,
      description: proyectAux.description,
      html_url: proyectAux.html_url,
      language,
      languageColor: color
    }
    return proyect
  })
}

export function fetchProyectsPages (GithubProyects: Proyect[],ITEMS_PER_PAGE:number) {
  const totalPages = Math.ceil(GithubProyects.length / ITEMS_PER_PAGE)
  return totalPages
}
