import {CanActivateFn} from '@angular/router';
import {question} from './question';

export const questionCanActivateGuard: CanActivateFn = (_route, _state) => {
    return question('Можно ли перейти по пути?');
};
