import AsyncStorage from '@react-native-async-storage/async-storage';

export class CacheManager {

    static async set(key, value) {
        try {
            const jsonValue = JSON.stringify(value);
            await AsyncStorage.setItem(key, jsonValue);
            console.log(`CacheManager: Successfully stored data for key: ${key}`);
        } catch (error) {
            console.error(`CacheManager: Error storing data for key: ${key}`, error);
            throw error;
        }
    }

    static async get(key, bypassMemoryCache = false) {
        try {
            const jsonValue = await AsyncStorage.getItem(key);
            if (jsonValue !== null) {
                console.log(`CacheManager: Successfully retrieved data for key: ${key}`);
                return JSON.parse(jsonValue);
            }
            console.log(`CacheManager: No data found for key: ${key}`);
            return null;
        } catch (error) {
            console.error(`CacheManager: Error retrieving data for key: ${key}`, error);
            return null;
        }
    }

    static async remove(key) {
        try {
            await AsyncStorage.removeItem(key);
            console.log(`CacheManager: Successfully removed data for key: ${key}`);
        } catch (error) {
            console.error(`CacheManager: Error removing data for key: ${key}`, error);
            throw error;
        }
    }

    static async clear() {
        try {
            await AsyncStorage.clear();
            console.log('CacheManager: Successfully cleared all data');
        } catch (error) {
            console.error('CacheManager: Error clearing all data', error);
            throw error;
        }
    }
}