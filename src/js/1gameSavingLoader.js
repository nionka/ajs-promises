import json from './parses';
import read from './reader';

export default class GameSavingLoader {
  static async load() {
    try {
      const data = await read();
      const value = await json(data);

      return JSON.parse(value);
    } catch (error) {
      return error;
    }
  }
}
