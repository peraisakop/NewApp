var NotesApplication = require('../note');
var expect = require('chai').expect;
var note = new NotesApplication("Peter");

describe("NotesApplication", function (){

    it("Author is Undefined",function(){
      expect(note.author).to.be.a("String");
    });

    it("Check To See If Get Method Is Created",function(){
      expect(note.hasOwnProperty("get")).to.be.true;
    });

    it("Check To See If Create Method Is Created",function(){
      expect(note.hasOwnProperty("create")).to.be.true;
    });

    it("Check To See If Search Method Is Created",function(){
      expect(note.hasOwnProperty("search")).to.be.true;
    });

    it("Create Function should not allow empty parameter",function(){
      expect(note.create('')).to.be.equal("This function needs a value");
    });

});
