const globalApiURL = "https://api.mobsmile.com/studia/";

export default class baseService {
  postObject(schemaName, funcName, entity) {
    var url = globalApiURL + schemaName + "/" + funcName;
    return this.callServiceMethod(url, entity, "POST");
  }

  getObject(schemaName, funcName, data) {
    var url =
      globalApiURL + schemaName + "/" + funcName + "?" + (data ? data : "");
    return this.callServiceMethod(url, data, "GET");
  }

  putObject(schemaName, funcName, entity) {
    var url = globalApiURL + schemaName + "/" + funcName;
    return this.callServiceMethod(url, entity, "PUT");
  }

  deleteObject(schemaName, funcName, entity) {
    var url = globalApiURL + schemaName + "/" + funcName;
    return this.callServiceMethod(url, entity, "DELETE");
  }

  callServiceMethod(url, data, method, cancelToken) {
    const token = getLocalstorage("token");

    var headers = {
      Authorization: token ? "Bearer " + token : "",
    };

    return this.callAnyServiceMethod(url, data, method, headers, cancelToken);
  }

  async callAnyServiceMethod(url, data, method, headers, cancelToken) {
    var authOptions = {
      method,
      url,
      data,
      headers,
      withCredentials: true,
      cancelToken,
    };

    return await axios(authOptions)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
