import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:5000";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

export default class YodlrApi {
  // the token for interactive with the API will be stored here.
  static token;

  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${YodlrApi.token}` };
    const params = (method === "get")
      ? data
      : {};
    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  static async getUserList() {
    let res = await this.request('users');
    return res
  }

  static async postUser(data) {
    let res = await this.request('users',data,'post')
    return res
  }

  static async deleteUser(id) {
    let res = await this.request(`users/${id}`,{}, 'delete')
    return res
  }

  static async getUser(id) {
    let res = await this.request(`users/${id}`)
    return res
  }

  static async activateUser(id) {
    let user = await this.getUser(id)
    user.state = 'active'
    let res = await this.request(`users/${id}`,user, 'put')
    return res
  }
}