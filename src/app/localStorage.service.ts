import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {

  constructor() { }

  set(key: string, value: any): boolean {
    let wasSet: boolean = true;

    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch(error) {
      wasSet = false;
      console.error(error.message)
    }

    return wasSet;
  }

  get(key: string): any {
    let value: string = "";

    try {
      value = localStorage.getItem(key);
    } catch(error) {
      console.error(error.message);
      value = null;
    }

    return JSON.parse(value);
  }

  remove(key: string): boolean {
    let wasRemoved: boolean = true;
    
    try{
      localStorage.removeItem(key);
    } catch (error){
      wasRemoved = false; 
    }

    return wasRemoved;
  }

  clear(): any {
    let wasCleared: boolean = true;

    try{
      localStorage.clear();
    } catch (error){
      wasCleared = false; 
    }

    return wasCleared;
  }
}
