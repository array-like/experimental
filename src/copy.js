

export function copy ( a, ai, aj, b, bi ) {

	for ( ; ai < aj ; ++ai, ++bi ) {
		b[bi] = a[ai];
	}

}

