import { useEffect, useState } from 'react';
import { LayoutProyects } from '../lib/definitions';

export default function useLayoutList(
  updateListState: any,
  ITEMS_PER_PAGE_ON_GRID: number,
  ITEMS_PER_PAGE_ON_ROWS: number,
  setLoading:any
) {
  let ITEMS_PER_PAGE: number = 4;

  const [layoutMode, setLayoutMode] = useState(LayoutProyects.gridLayout);
  let storageMode: LayoutProyects = LayoutProyects.gridLayout;
  useEffect(() => {
    if (typeof window !== 'undefined') {
      storageMode =
        (localStorage.getItem('repoLayout') as LayoutProyects) ||
        LayoutProyects.gridLayout;
      ITEMS_PER_PAGE =
        storageMode === LayoutProyects.gridLayout
          ? ITEMS_PER_PAGE_ON_GRID
          : ITEMS_PER_PAGE_ON_ROWS;
    }
  }, []);

  useEffect(() => {
    setLayoutMode(storageMode);
    updateListState(ITEMS_PER_PAGE);
    setLoading(false)
  }, [storageMode]);

  return { layoutMode, setLayoutMode, ITEMS_PER_PAGE };
}
