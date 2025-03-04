const reducers = (globalState, action) => {
  switch (action.type) {
    case "LOGIN_EXITOSO":
    case "REGISTRO_EXITOSO":
      localStorage.setItem("token", action.payload.token);

      return {
        ...globalState,
        authStatus: true,
      };

    case "OBTENER_CLIENTE":
      return {
        ...globalState,
        authStatus: true,
        user: action.payload,
      };

    case "CERRAR_SESION":
      localStorage.removeItem("token");

      return {
        ...globalState,
        client: null,
        authStatus: null,
        loading: false,
      };

    default:
      return globalState;
  }
};

export default reducers;
