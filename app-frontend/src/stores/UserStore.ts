import { makeAutoObservable } from "mobx";

import { http } from "../configs";
import autoSave from "../helpers/autoSave";
import { User } from "../models";

class UserStore {
  user: User;

  isAuthorized: boolean;

  constructor() {
    makeAutoObservable(this);
    this.isAuthorized = false;
    autoSave(this, "user");
  }

  register = async (creds: FormData) => {
    await http.get("/sanctum/csrf-cookie");
    const response = await http.post("/api/register", Object.fromEntries(creds));
    this.user = new User(response.data);
    this.isAuthorized = true;
  };

  login = async (creds: FormData) => {
    await http.get("/sanctum/csrf-cookie");
    const response = await http.post("/api/login", Object.fromEntries(creds));
    this.user = new User(response.data);
    this.isAuthorized = true;
  };

  logout = async () => {
    await http.post("/api/logout");
    localStorage.clear();
    this.isAuthorized = false;
  };
}

export default UserStore;
