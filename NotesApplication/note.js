module.exports = function NotesApplication(author) {
	//constructor with author and note

        this.author = author;
        this.note = [];


        this.create = function (note_content){
        	/** create(note_content) - This function takes
        	  * the note content as the parameter and adds
        	  * it to the notes list of the object.
        	  */

          if(note_content === '') {return "This function needs a value";} //For test case
          this.note.push(note_content);
        };

        this.listNotes = function () {

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
        };

        this.get = function (note_id) {
        	/** get(note_id) - This function takes a
        	  * note_id which refers to the index of the note
        	  * in the notes list and returns the content of that note as a string.
        	  * note check if the int entered is available on the array;
        	  */
            if(typeof note_id !== 'string'){
                   return "note_id Input Must be Integer";

            }

            if(!note_id){
                   return "note_id must have a value";

            }

            if(note_id){
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


        };

        this.search = function (search_text) {
       		/**search(search_text) - This function take a search string,
       		 * search_text and returns all the notes with that text within
       		 * it in the following format
       		 */

           if(typeof search_text !== 'string'){
                  return "Search_Text Input Can't be Integer";

           }

           if(search_text){
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



       	};

        this.delete = function (note_id) {
       		/**delete(note_id) - This function deletes
       		 * the note at the index note_id of the notes list.
       		 */

           if(typeof note_id !== 'string'){
                  return "Search_Text Input Can't be Integer";

           }

           if(note_id){
             for(var d = 0; d < this.note.length; d++)
          		{
                  		if(d === note_id)
               			{
               				this.note.splice(d);
               			}
              }
          }


        };



   	  this.edit = function (note_id, new_content) {
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
   	};


}
