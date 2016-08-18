var NotesApplication = require('../note');
var expect = require('chai').expect;
var note = new NotesApplication("Peter");

describe("NotesApplication", function (){

    it("Author is Undefined",function(){
      expect(note.author).to.be.a("String");
    });

    it("Create Function should not allow empty parameter",function(){
      expect(note.create('')).to.be.equal("This function needs a value");
    });

});
