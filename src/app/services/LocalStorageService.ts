class LocalStorageService {
  // Cria ou atualiza um item no localStorage
  static setItem<T>(key: string, value: T): void {
    if (typeof window !== "undefined") {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }

  static getItem<T>(key: string): T | null {
    if (typeof window !== "undefined") {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    }
    return null;
  }

  static updateItem<T>(key: string, value: Partial<T>): void {
    if (typeof window !== "undefined") {
      const existingItem = this.getItem<T>(key);
      if (existingItem) {
        const updatedItem = { ...existingItem, ...value };
        this.setItem(key, updatedItem);
      }
    }
  }

  static removeItem(key: string): void {
    if (typeof window !== "undefined") {
      localStorage.removeItem(key);
    }
  }

  static clear(): void {
    if (typeof window !== "undefined") {
      localStorage.clear();
    }
  }
}

export default LocalStorageService;
