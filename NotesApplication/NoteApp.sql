CREATE TABLE `Notes` (
	`note_id` INT NOT NULL,
	`title` VARCHAR(255) NOT NULL,
	`author_id` INT NOT NULL,
	`content` TEXT NOT NULL,
	`date_Created` DATE NOT NULL,
	PRIMARY KEY (`note_id`)
);

CREATE TABLE `Author` (
	`author_id` INT NOT NULL,
	`first_name` VARCHAR(255) NOT NULL,
	`last_name` VARCHAR(255) NOT NULL,
	`gender` VARCHAR(255) NOT NULL,
	PRIMARY KEY (`author_id`)
);

CREATE TABLE `Category` (
	`category_id` INT NOT NULL,
	`category_name` VARCHAR(255) NOT NULL,
	PRIMARY KEY (`category_id`)
);

CREATE TABLE `NoteCategory` (
	`note_cat_id` INT NOT NULL,
	`note_id` INT NOT NULL,
	`category_id` INT NOT NULL,
	PRIMARY KEY (`note_cat_id`)
);

ALTER TABLE `Notes` ADD CONSTRAINT `Notes_fk0` FOREIGN KEY (`author_id`) REFERENCES `Author`(`author_id`);

ALTER TABLE `NoteCategory` ADD CONSTRAINT `NoteCategory_fk0` FOREIGN KEY (`note_id`) REFERENCES `Notes`(`note_id`);

ALTER TABLE `NoteCategory` ADD CONSTRAINT `NoteCategory_fk1` FOREIGN KEY (`category_id`) REFERENCES `Category`(`category_id`);


 insert into category(category_id,category_name) values(1,'Sport');
insert into category(category_id,category_name) values(2,'Religion');
insert into category(category_id,category_name) values(3,'Education');
insert into category(category_id,category_name) values(4,'Business');

insert into Author values(1,"Peter","Adepoju","M");
insert into Author values(2,"Paul","Adepoju","M");
insert into Author values(3,"Joan","James","F");
insert into Author values(4,"Abigail","Henry","F");

insert into Notes value(1,"First Android App",1,"This is an article
                        about my writing","2016-01-12");

insert into Notes value(2,"Business Auditing",2,"This aritcle is about
                        auditing","2016-02-12");


insert into NoteCategory value(1,1,3);
insert into NoteCategory value(2,1,4);
insert into NoteCategory value(3,2,4);
insert into NoteCategory value(4,2,2);




	select CONCAT(a.first_name,' ',a.last_name) as
	"Full Name",
	n.title,n.content,c.category_name,
	n.Date_Created from notes n
	join NoteCategory nc on
	n.Note_id = nc.note_id
	join author a on
	n.author_id = a.author_id
	join Category c on nc.category_id
	 = c.category_id;
