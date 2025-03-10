import { useEffect, useState } from 'react';
import { useReplicant } from '@nodecg/react-hooks';
import { Jsonify } from 'type-fest';

export const useWrappedReplicant = <V, T = Jsonify<V>>(replicantName: string, defaultValue: T, bundle?: string, persistent?: boolean) => {
	const [replicant, setReplicant] = useReplicant<V, T>(replicantName, { bundle, defaultValue, persistent });
	const [value, setValue] = useState<T>(defaultValue);

	useEffect(() => {
		if(!replicant) return;

		setValue(replicant);
	}, [replicant, setValue]);

	return [value, setReplicant] as const;
}