import { formType } from '@/sanity/schemaTypes/formType';
import { heroType } from '@/sanity/schemaTypes/heroType';
import { imageGalleryType } from '@/sanity/schemaTypes/imageGalleryType';
import { pageType } from '@/sanity/schemaTypes/pageType';
import { promotionType } from '@/sanity/schemaTypes/promotionType';
import { textWithIllustrationType } from '@/sanity/schemaTypes/textWithIllustrationType';
import { videoType } from '@/sanity/schemaTypes/videoType';

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
