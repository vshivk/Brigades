export const screenWidth = window.innerWidth; // Получаем ширину экрана пользователя
export const screenHeight = window.innerHeight; // Получаем высоту экрана пользователя
export const maxElementWidth = 300; // Максимальная ширина элемента в пикселях
export const maxElementHeight = 250; // Максимальная высота элемента в пикселях
export const elementsPerRow = Math.floor(screenWidth / maxElementWidth); // Определяем, сколько элементов может поместиться в одной строке
export const rowsPerPage = Math.floor(screenHeight / maxElementHeight); // Определяем, сколько строк элементов может поместиться на странице
export const maxElementsPerPage = (elementsPerRow * rowsPerPage) + 2; // Определяем максимальное количество элементов, которое может поместиться на одной странице