/* eslint-disable prettier/prettier */
import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';

export const isStringValidator: ValidatorFn = (
    control: AbstractControl,
): ValidationErrors | null => {
    const hasError = Number(control.value);

    return hasError ? {isString: 'Is not a string'} : null;
};
