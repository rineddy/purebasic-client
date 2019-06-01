import { TextDocument, TextDocumentIdentifier, TextDocuments, } from 'vscode-languageserver';

/**
 * Service for document handling (register doc / search doc / doc events)
 */
export class DocHandling extends TextDocuments {
	public static service = new DocHandling();

	private constructor() {
		super();
	}

	public find(docIdentifier: TextDocumentIdentifier): Thenable<TextDocument> {
		const doc = this.get(docIdentifier.uri);
		return doc ? Promise.resolve(doc) : Promise.reject(`doc '${docIdentifier.uri}' not found!`);
	}
}