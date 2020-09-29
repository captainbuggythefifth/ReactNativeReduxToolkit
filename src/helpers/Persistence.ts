class Persistence {
  private persistenceLibrary: any;

  constructor(persistenceLibrary: any) {
    this.persistenceLibrary = persistenceLibrary
  }

  async store(key: string, value: any) {
    this.persistenceLibrary.setItem(`@${key}`, value)
  }

  async retreive(key: string) {
    return this.persistenceLibrary.getItem(`@${key}`)
  }

  async remove(key: string) {
    return this.persistenceLibrary.removeItem(`@${key}`)
  }
};

export default Persistence;