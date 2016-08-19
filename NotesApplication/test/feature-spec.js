var NotesApplication = require('../note');
var expect = require('chai').expect;
var note = new NotesApplication("Peter");

describe("NotesApplication", function (){

    //1.
    it("Author is Undefined",function(){
      expect(note.author).to.be.a("string");
    });

    //2.
    it("note_id Cannot be empty",function(){
      expect(note.get()).to.be.equal("note_id must have a value");
    });

    //3.
    it("Check To See If Get Method Is Created",function(){
      expect(note.hasOwnProperty("get")).to.be.true;
    });

    //4.
    it("Check To See If Create Method Is Created",function(){
      expect(note.hasOwnProperty("create")).to.be.true;
    });

    //5.
    it("Check To See If Search Method Is Created",function(){
      expect(note.hasOwnProperty("search")).to.be.true;
    });

    //6.
    it("Check To See If Delete Method Is Created",function(){
      expect(note.hasOwnProperty("delete")).to.be.true;
    });

    //7.
    it("Check To See If Edit Method Is Created",function(){
      expect(note.hasOwnProperty("edit")).to.be.true;
    });

    //8.
    it("Create Function should not allow empty parameter",function(){
      expect(note.create('')).to.be.equal("This function needs a value");
    });

    //9.
    it("should reject Integer values",function(){
      expect(note.search(1)).to.be.equal("Search_Text Input Can't be Integer");
    });

    //10.
    it("get function should reject String values",function(){
      expect(note.get("Hello")).to.be.equal("note_id Input Can't be Integer");
    });

    /*11.
    it("should reject String values",function(){
      expect(note.delete("Hello")).to.be.equal("note_id Input Can't be String");
    });*/

});
