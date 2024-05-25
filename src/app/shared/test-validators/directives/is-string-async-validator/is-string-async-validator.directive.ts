/* eslint-disable no-use-before-define */
import {ChangeDetectorRef, Directive} from '@angular/core';
import {
    AbstractControl,
    AsyncValidator,
    NG_ASYNC_VALIDATORS,
    ValidationErrors,
} from '@angular/forms';
import {Observable, map, tap, timer} from 'rxjs';
import {isStringValidator} from '../../is-string-validator';

@Directive({
    selector: '[appIsStringAsyncValidator]',
    providers: [
        {
            provide: NG_ASYNC_VALIDATORS,
            useExisting: IsStringAsyncValidatorDirective,
            multi: true,
        },
    ],
})
export class IsStringAsyncValidatorDirective implements AsyncValidator {
    constructor(private readonly changeDetectorRef: ChangeDetectorRef) {}

    validate(
        control: AbstractControl,
    ): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
        return timer(3000).pipe(
            map(() => isStringValidator(control)),
            tap(() => {
                this.changeDetectorRef.markForCheck();
            }),
        );
    }
}
