//import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
//export const structure: StructureResolver = (S) =>
 // S.list()
   // .title('Content')
    //.items(S.documentTypeListItems())
     
    import type { StructureResolver } from 'sanity/structure';

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Products')
        .schemaType('product')
        .child(S.documentTypeList('product').title('Products')),
      S.listItem()
        .title('Categories')
        .schemaType('category')
        .child(S.documentTypeList('category').title('Categories')),
    ]);
