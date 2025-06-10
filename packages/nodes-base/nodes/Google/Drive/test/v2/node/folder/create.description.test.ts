import { description } from '../../../../v2/actions/folder/create.operation';

describe('Create Folder Operation Description', () => {
	it('should have aiGeneration flag and correct displayOptions for folder name property', () => {
		expect(Array.isArray(description)).toBe(true);

		const folderNameProperty = description.find((prop) => prop.name === 'name');

		expect(folderNameProperty).toBeDefined();

		if (folderNameProperty) {
			expect(folderNameProperty.aiGeneration).toBe(true);
			// Check displayOptions for the entire operation, not just the single property
			// as displayOptions is not per-property but per-operation.
			// The description object itself is an array of INodeProperties objects,
			// and the displayOptions are exported from the same file, applied to the whole set.
			// We need to check the exported description's parent object or how displayOptions are structured.

			// Assuming 'description' is the result of updateDisplayOptions(displayOptions, properties)
			// and 'displayOptions' is a sibling export or accessible for verification.
			// For this subtask, I will focus on what's directly available in 'description'
			// or inferable from the provided context.

			// The prompt asks to check displayOptions on the property itself, which might be a misunderstanding
			// of how displayOptions are typically structured in n8n.
			// However, if the `description` object's elements are expected to have `displayOptions` directly,
			// the test will reflect that.

			// Let's assume the displayOptions are part of the main description object (operation level)
			// and not on individual properties. The original prompt might have a slight imprecision here.
			// The `description` imported is an array of properties. The `displayOptions` are typically
			// associated with the operation as a whole.

			// Let's re-evaluate the requirement: "Assert that this property has displayOptions.show.resource as ['folder']"
			// This implies that `displayOptions` should be checked on the `folderNameProperty` itself.
			// This is unusual, as `displayOptions` are typically not on individual properties but on the collection.

			// Given the structure of `create.operation.ts`, `description` is `updateDisplayOptions(displayOptions, properties)`.
			// `updateDisplayOptions` likely merges `displayOptions` into each property that matches the show conditions.
			// So, the property itself should indeed have `displayOptions`.

			expect(folderNameProperty.displayOptions?.show?.resource).toEqual(['folder']);
			expect(folderNameProperty.displayOptions?.show?.operation).toEqual(['create']);
		}
	});
});
