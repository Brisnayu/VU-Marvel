import { TestBed } from '@angular/core/testing';
import { LocalStorageService } from './local-storage.service';

describe('LocalStorageService', () => {
  let service: LocalStorageService;

  beforeEach(() => {
    let store: { [key: string]: string } = {};
    const mockLocalStorage = {
      getItem: (key: string): string | null => {
        return store[key] || null; 
      },
      setItem: (key: string, value: string) => {
        store[key] = `${value}`;
      },
      removeItem: (key: string) => {
        delete store[key];
      },
      clear: () => {
        store = {};
      }
    };

    spyOn(localStorage, 'getItem').and.callFake(mockLocalStorage.getItem);
    spyOn(localStorage, 'setItem').and.callFake(mockLocalStorage.setItem);
    spyOn(localStorage, 'removeItem').and.callFake(mockLocalStorage.removeItem);
    spyOn(localStorage, 'clear').and.callFake(mockLocalStorage.clear);

    TestBed.configureTestingModule({
      providers: [LocalStorageService]
    });

    service = TestBed.inject(LocalStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

// import { TestBed } from '@angular/core/testing';
// import { LocalStorageService } from './local-storage.service';

// describe('LocalStorageService', () => {
//   let service: LocalStorageService;
//   let mockLocalStorage: { [key: string]: string } = {};

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       providers: [
//         { provide: 'LocalStorage', useValue: mockLocalStorage },
//         LocalStorageService
//       ]
//     });

//     service = TestBed.inject(LocalStorageService);
//   });

//   it('should be created', () => {
//     expect(service).toBeTruthy();
//   });

//   it('should set item in localStorage', () => {
//     service.setItem('testKey', 'testValue');
//     expect(mockLocalStorage['testKey']).toEqual('testValue');
//   });

//   it('should get item from localStorage', () => {
//     mockLocalStorage['testKey'] = 'testValue';
//     const value = service.getItem('testKey');
//     expect(value).toEqual('testValue');
//   });

//   it('should remove item from localStorage', () => {
//     mockLocalStorage['testKey'] = 'testValue';
//     service.removeItem('testKey');
//     expect(mockLocalStorage['testKey']).toBeUndefined();
//   });

//   it('should clear localStorage', () => {
//     mockLocalStorage['testKey1'] = 'testValue1';
//     mockLocalStorage['testKey2'] = 'testValue2';
//     service.clear();
//     expect(Object.keys(mockLocalStorage).length).toEqual(0);
//   });
// });