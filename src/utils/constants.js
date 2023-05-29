// STATUS CODES
const CREATE_CODE = 201;
const BAD_REQUEST_ERROR_CODE = 400;
const UNAUTHORIZED_ERROR_CODE = 401;
const FORBIDDEN_ERROR_CODE = 403;
const NOT_FOUND_ERROR_CODE = 404;
const CONFLICT_ERROR_CODE = 409;
const DEFAULT_ERROR_CODE = 500;

// ERRORS MESSAGES
const SIGNIN_MESSAGE = 'Успешный вход';
const SIGNOUT_MESSAGE = 'Успешный выход';
const SIGNUP_BAD_DATA_MESSAGE = 'Переданы некорректные данные для создания пользователя';
const SIGNUP_CONFLICT_MESSAGE = 'Указанный email уже зарегистрирован. Пожалуйста используйте другой email';
const MOVIE_DELETE_MESSAGE = 'Фильм удалён';
const MOVIE_BAD_DATA_MESSAGE = 'Переданы некорректные данные для создания карточки фильма';
const MOVIE_FORBIDDEN_MESSAGE = 'Невозможно удалить карточку созданную не вами';
const MOVIE_DELETE_NOT_FOUND_MESSAGE = 'Карточка с указанным ID не найдена';
const MOVIE_FIND_NOT_FOUND_MESSAGE = 'Не найдены карточки пользователя';
const MOVIE_BAD_ID_MESSAGE = 'Передан некорректный ID карточки';
const URL_NOT_FOUND_MESSAGE = 'Указан несуществующий URL';
const USER_NOT_FOUND_MESSAGE = 'Пользователь с указанным ID не найден';
const USER_BAD_ID_MESSAGE = 'Передан некорректный ID пользователя';
const USER_BAD_DATA_MESSAGE = 'Переданы некорректные данные для редактирования профиля';
const AUTHORIZATION_MESSAGE = 'Необходима авторизация';
const AUTHORIZATION_ERROR_MESSAGE = 'Неправильная почта или пароль';

// ALLOWED CORS DOMAINS
const ALLOWED_CORS = [
  'http://diplom.ld-webdev.nomoredomains.rocks',
  'https://diplom.ld-webdev.nomoredomains.rocks',
  'http://51.250.11.115',
  'https://51.250.11.115',
  'http://localhost:3000',
  'http://localhost:3001',
];

// ALLOWED METHODS
const DEFAULT_ALLOWED_METHODS = 'GET,HEAD,PUT,PATCH,POST,DELETE';

module.exports = {
  CREATE_CODE,
  BAD_REQUEST_ERROR_CODE,
  UNAUTHORIZED_ERROR_CODE,
  FORBIDDEN_ERROR_CODE,
  NOT_FOUND_ERROR_CODE,
  CONFLICT_ERROR_CODE,
  DEFAULT_ERROR_CODE,
  SIGNIN_MESSAGE,
  SIGNOUT_MESSAGE,
  SIGNUP_BAD_DATA_MESSAGE,
  SIGNUP_CONFLICT_MESSAGE,
  MOVIE_DELETE_MESSAGE,
  MOVIE_BAD_DATA_MESSAGE,
  MOVIE_FORBIDDEN_MESSAGE,
  MOVIE_DELETE_NOT_FOUND_MESSAGE,
  MOVIE_FIND_NOT_FOUND_MESSAGE,
  MOVIE_BAD_ID_MESSAGE,
  URL_NOT_FOUND_MESSAGE,
  USER_NOT_FOUND_MESSAGE,
  USER_BAD_ID_MESSAGE,
  USER_BAD_DATA_MESSAGE,
  AUTHORIZATION_MESSAGE,
  AUTHORIZATION_ERROR_MESSAGE,
  ALLOWED_CORS,
  DEFAULT_ALLOWED_METHODS,
};
