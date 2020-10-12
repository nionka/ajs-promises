import GameSavingLoader from './1gameSavingLoader';

(async () => {
  try {
    const gameSaving = await GameSavingLoader.load();
    return gameSaving;
  } catch (error) {
    return error;
  }
})();
