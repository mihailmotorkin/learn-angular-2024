import {CanDeactivateFn} from '@angular/router';
import {question} from './question';

export const questionCanDeactivateGuard: CanDeactivateFn<unknown> = (
    _component,
    _currentRoute,
    _currentState,
    _nextState,
) => {
    return question('Можно ли покинуть страницу?');
};
