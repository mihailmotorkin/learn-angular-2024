import {CanMatchFn} from '@angular/router';
import {question} from './question';

export const questionCanLoadGuard: CanMatchFn = (_route, _segments) => {
    return question('Можно ли загрузить данный модуль?');
};
