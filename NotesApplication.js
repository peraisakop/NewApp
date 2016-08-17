class NotesApplication {
	//constructor with author and note
	constructor (author) {
        this.author = author;
        this.note = [];
    }


    //created the create function
    create(note_content) {
    	/** create(note_content) - This function takes 
    	  * the note content as the parameter and adds 
    	  * it to the notes list of the object.
    	  */

    	this.note.push(note_content);
    }

    //this function list all the notes
    listNotes() {

    	/**
    	*	listNotes() - This function lists out each of the notes in 
    	*	the notes list in the following format. 
    	*	The note_id parameter below represents 
    	*	the respective index of each of the items in the 
    	*	list, the NOTE_CONTENT represent 
    	*	the note content and the author represents the note author.
	
		*	Note ID: [note_id]
		*	[NOTE_CONTENT]

		*	By Author [author] 

		*/

    	for(var i = 0; i < this.note.length; i++) {
    		console.log("Note ID: " + i  +
    					" Content: " + this.note.note_content[i] +
    					" By Author: "+ this.author
    					);
    	}
    }

    get(note_id) {
    	/** get(note_id) - This function takes a 
    	  * note_id which refers to the index of the note 
    	  * in the notes list and returns the content of that note as a string.
    	  */

    	  var stringReturn = "" ;

    	  for (var k = 0; k < note.length; k++) {
    	  	  if (this.note[i] === note_id) {
    	  	  	stringReturn  = this.note.note_content[i];
    	  	  }

    	  	  return stringReturn;
    	  }

   	search(search_text) {
   		var retArray = [];
   		for(var f = 0; f < this.note.length; f++) {
   			if(this.note.charAt(i) === search_text)
				{
					retArray.push(this.note.note_content[i]);

				}

   		}

   		return retArray;
   	}


    }
         
     
}