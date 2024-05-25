/* eslint-disable prettier/prettier */
import {AbstractControl, AsyncValidatorFn, ValidationErrors} from '@angular/forms';
import {Observable, map, timer} from 'rxjs';
import { isStringValidator } from './is-string-validator';

export const isStringAsyncValidator: AsyncValidatorFn = (
    control: AbstractControl,
): Observable<ValidationErrors | null> => {
    return timer(300).pipe(
        map(() => isStringValidator(control))
    );
};
