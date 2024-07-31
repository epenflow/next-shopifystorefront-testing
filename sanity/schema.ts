/**default import */
import { type SchemaTypeDefinition } from 'sanity';

/** commented */
import { blockContentType } from './schemaTypes/blockContentType';
import { categoryType } from './schemaTypes/categoryType';
import { postType } from './schemaTypes/postType';
import { authorType } from './schemaTypes/authorType';

export const schema: { types: SchemaTypeDefinition[] } = {
	types: [blockContentType, categoryType, postType, authorType],
};
