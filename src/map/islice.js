import { pick , range } from '..' ;

export function islice ( iterable, start, stop, step, out ) {

	return pick( iterable, range( start, stop, step, [] ), out );

}
