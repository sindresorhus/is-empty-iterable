import {expectType} from 'tsd';
import isEmptyIterable = require('.');

expectType<boolean>(isEmptyIterable([]));
expectType<boolean>(isEmptyIterable(new Set([1, 2])));
