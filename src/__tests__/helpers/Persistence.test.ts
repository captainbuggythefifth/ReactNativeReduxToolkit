import React from 'react';
import Persistence from '../../helpers/Persistence';
import AsyncStorage from '@react-native-community/async-storage';

describe('Persistence', () => {

  const persistenceLibrary = AsyncStorage;

  const persistence = new Persistence(persistenceLibrary);
  
  const key = "theme";
  const value = "default";
  

  beforeEach(async () => {
    await persistence.store(key, value);
  });

  it('should save data and retrieve data', async () => {
    const data = await persistence.retreive(key);
    expect(data).toEqual(value)
  });

  it('should save data and retrieve data', async () => {
    const jsonValue = {
      value: "value"
    };
    await persistence.store(key, jsonValue);
    const data = await persistence.retreive(key);
    expect(data).toEqual(jsonValue)
  });

  it('should remove the stored data', async () => {
    await persistence.remove(key);
    const data = await persistence.retreive(key);
    expect(data).toBe(null)
  });

})