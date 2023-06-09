import { MagicNumbers } from 'types/enums/magic-numbers';
import { LocalStorage } from 'types/enums/server';

export const setIdFavorite = (id: number) => {
  const data = localStorage.getItem(LocalStorage.FAVORITE);
  if (data) {
    const array = JSON.parse(data) as number[];
    array.push(id);
    localStorage.setItem(LocalStorage.FAVORITE, JSON.stringify(array));
    return;
  }
  localStorage.setItem(LocalStorage.FAVORITE, JSON.stringify([id]));
};

export const deleteIdFavorite = (id: number) => {
  const data = localStorage.getItem(LocalStorage.FAVORITE);
  if (data) {
    const array = JSON.parse(data) as number[];
    const updateArray = array.filter((item) => item !== id);
    localStorage.setItem(LocalStorage.FAVORITE, JSON.stringify(updateArray));
  }
};

export const getFavoriteParams = (page: number) => {
  const data = localStorage.getItem(LocalStorage.FAVORITE);
  if (data) {
    const arr = JSON.parse(data) as number[];
    if (arr.length) {
      const currentPage = page * MagicNumbers.AMOUNT_CARDS_PAGE;
      const nextPage = currentPage + MagicNumbers.AMOUNT_CARDS_PAGE;
      const actualPages = [] as number[];
      arr.forEach((item, index) => {
        if (index >= currentPage && index < nextPage) {
          actualPages.push(item);
        }
      });
      const stringParams = actualPages.map((item) => `&ids[]=${item}`).join('');
      return `${stringParams}`;
    }
  }
  return '';
};

export const checkIdFavorite = (id: number) => {
  const data = localStorage.getItem(LocalStorage.FAVORITE);
  if (data) {
    const array = JSON.parse(data) as number[];
    const isCheckId = array.find((item) => item === id);
    if (isCheckId) {
      return true;
    }
  }
  return false;
};

export const getAmountFavoriteCards = () => {
  const data = localStorage.getItem(LocalStorage.FAVORITE);
  if (data) {
    const arrayCards = JSON.parse(data) as number[];
    return arrayCards.length;
  }
  return MagicNumbers.ZERO;
};
