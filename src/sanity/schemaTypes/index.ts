import { type SchemaTypeDefinition } from 'sanity'
import products from '../../../studio-medswift/products'
import categories from '../../../studio-medswift/categories'
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [products,categories],
}
