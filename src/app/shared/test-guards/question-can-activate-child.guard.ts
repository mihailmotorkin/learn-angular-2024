import {CanActivateChildFn} from '@angular/router';
import {question} from './question';

export const questionCanActivateChildGuard: CanActivateChildFn = (_childRoute, _state) => {
    return question('Можно ли перейти по дочерниму пути?');
};
