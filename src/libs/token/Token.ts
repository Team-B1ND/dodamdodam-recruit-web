import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
} from "../../constants/token/constant";
import Cookie from "../storage/Cookie";
import { Storage } from "../storage/Storage";

class Token {
  private storage: Storage;

  constructor(storage: Storage) {
    this.storage = storage;
  }

  public get(
    key: typeof ACCESS_TOKEN_KEY | typeof REFRESH_TOKEN_KEY
  ): string | undefined {
    return this.storage.get(key);
  }

  public set(
    key: typeof ACCESS_TOKEN_KEY | typeof REFRESH_TOKEN_KEY,
    value: string
  ): void {
    this.storage.set(key, value);
  }

  public remove(key: typeof ACCESS_TOKEN_KEY | typeof REFRESH_TOKEN_KEY): void {
    this.storage.remove(key);
  }

  public clear(): void {
    this.storage.remove(ACCESS_TOKEN_KEY);
    this.storage.remove(REFRESH_TOKEN_KEY);
  }
}

export default new Token(Cookie);
