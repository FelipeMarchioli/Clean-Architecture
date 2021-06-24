class LoadSavePurchases {
  constructor(private readonly cacheStore: CacheStore) {}
}

interface CacheStore {

}

class CacheStoreSpy implements CacheStore {
  deleteCallsCount = 0
}

describe('LocalSavePurchases', () => {
  test('Should not delete cache on sut.init', () => {
    const cacheStore = new CacheStoreSpy();
    new LoadSavePurchases(cacheStore);
    expect(cacheStore.deleteCallsCount).toBe(0);
  })
})