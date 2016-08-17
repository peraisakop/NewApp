class NotesApplication {
	//constructor with author and note
	constructor (author) {
        this.author = author;
        this.note = [];
    }

    //created the create function
    create(note_content)
    {
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
		
    	for(var i = 0; i < this.note.length; i++) 
    	{
    		console.log("Note ID: " + i  + "\n"+
    						    this.note[i] +
    							" \nBy Author: "+ this.author+"\n"
    					);
    	}
    }

    get(note_id) {
    	/** get(note_id) - This function takes a 
    	  * note_id which refers to the index of the note 
    	  * in the notes list and returns the content of that note as a string.
    	  * note check if the int entered is available on the array;
    	  */
    	  
    	  var getReturnString = "" ;
    	  for (var k = 0; k < this.note.length; k++) 
    	  {
		  	  if (k === note_id) {
		  	  	console.log()
		  	  	getReturnString  += this.note[k];
		  	  }	  
    	  }
    	  
    	  if(getReturnString === '')
		   		{
		   			return "No Note"
		   		}
   	   	  else
		   		{
		   			
		   			return getReturnString;
		   		}
    	  
    }

   	search(search_text) {
   		/**search(search_text) - This function take a search string,
   		 * search_text and returns all the notes with that text within
   		 * it in the following format
   		 */ 
   		var searchReturnArray = [];
   		var countNoteFound = 0;
   		console.log("Showing results for search "+ " '"+search_text+"' \n");
   		for(var f = 0; f < this.note.length; f++) 
   		{
   		if(this.note[f].match(search_text))
			{
				console.log("Note ID: " + f  + "\n"+
						    this.note[f] +
							" \nBy Author: "+ this.author+"\n"
					);
			}
   		}
   	}
   	
   	delete(note_id) {
   		/**delete(note_id) - This function deletes
   		 * the note at the index note_id of the notes list. 
   		 */ 
   		for(var d = 0; d < this.note.length; d++) 
   		{
   		if(d === note_id)
			{
				console.log("Note ID: " + d  + "\n"+
						    this.note[d] +
							" \nBy Author: "+ this.author+"\n"
					);
			}
   		}
   	}
   	
   	edit(note_id, new_content) {
   		/** edit(note_id, new_content) - This function 
   		 * replaces the content in the note at note_id 
   		 * with new_content.
   		 */
 
   		for(var e = 0; e < this.note.length; e++) 
   		{
   		if(e === note_id)
			{
				this.note.push(new_content)
			}
   		}
   	}
   	
   	
}