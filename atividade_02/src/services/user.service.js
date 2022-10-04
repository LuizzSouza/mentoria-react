import { server } from "../config/server";


export class UserService {
  static INSTANCE;

  static getInstance() {
    if (!this.INSTANCE) this.INSTANCE = new UserService();
    return this.INSTANCE;
  }

  login(body) {
    return server.post("/sessions", body);
  }

  saveUser(body) {
    return server.post("/user", body);
  }

  listUsers() {
    return server.get("/user");
  }

  deleteUser(id) {
    return server.delete(`/user/${id}`);
  }
}