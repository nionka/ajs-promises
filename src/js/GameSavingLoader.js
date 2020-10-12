import json from './parses';
import read from './reader';

export default class GameSavingLoader {
  static load() {
    return new Promise((resolve, reject) => {
      const data = read();
      data.then((value) => json(value))
        .then((value) => resolve(JSON.parse(value)))
        .catch((err) => reject(err));
    });
  }
}
