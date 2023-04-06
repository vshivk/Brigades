export const screenWidth = window.innerWidth;
export const screenHeight = window.innerHeight;
export const maxElementWidth = 250;
export const maxElementHeight = 280;
export const elementsPerRow = Math.floor(screenWidth / maxElementWidth);
export const rowsPerPage = Math.floor(screenHeight / maxElementHeight);
export const maxElementsPerPage = (elementsPerRow * rowsPerPage) + 2;
