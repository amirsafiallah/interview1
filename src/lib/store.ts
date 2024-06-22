// This file can not be changed
interface Store {
    value: number;
}

const store: Store = {value: 0};

export function read(): Promise<number> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(store.value);
        }, Math.random() * 1000);
    });
}

export function write(value: number): Promise<number> {
    return new Promise((resolve) => {
        setTimeout(() => {
            store.value = value;
            resolve(store.value);
        }, Math.random() * 1000);
    });
}
