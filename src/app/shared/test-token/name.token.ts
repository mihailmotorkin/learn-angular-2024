/* eslint-disable prettier/prettier */
import {InjectionToken} from '@angular/core';

export const NAME_TOKEN = new InjectionToken(`It's name test token`, {
    providedIn: 'root',
    factory: () => 'none',
});
