import {expectType} from 'tsd-check';
import isEmptyIterable from '.';

expectType<boolean>(isEmptyIterable([]));
expectType<boolean>(isEmptyIterable(new Set([1, 2])));
