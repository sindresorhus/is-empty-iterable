import {expectType} from 'tsd';
import isEmptyIterable from './index.js';

expectType<boolean>(isEmptyIterable([]));
expectType<boolean>(isEmptyIterable(new Set([1, 2])));
