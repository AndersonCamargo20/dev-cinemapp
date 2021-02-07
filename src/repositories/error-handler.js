import {dialog} from '../utils/format';

export default function* handleError(response, messages = {}) {
  const {data} = response;

  const defaultMessages = {
    serverError: data?.detail ?? 'Ocorreu um erro no servidor.',
    clientError: data?.detail ?? 'Nenhuma obra encontrada.',
  };

  const isServerError = typeof data === 'string' || response.status >= 500;

  if (isServerError) {
    return dialog.toast(defaultMessages.serverError || messages.serverError);
  }

  const message =
    data.detail || messages.clientError || defaultMessages.clientError;
  return dialog.notification(message);
}
