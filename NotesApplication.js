class NotesApplication {
	//constructor with author and note
	constructor (author) {
        this.author = author;
        this.note = [];
    }


    //created the create function
    create(note_content) {
    	this.note.push(note_content);
    }


         
     
}