# Developer Manual

In accordance with our application, all future developers should refer to this document for any
future needs pertaining to file and database structure, library dependencies, and functionality.
This document will highlight current implementations, as well as possible future implementations,
and will be updated accordingly if/when future implementations are created.

### File Structure

Our files are set up into 3 directories: docs, scripts, and style. Docs contains documents that 
come our site including this manual and the user guide. Then in scripts we have the PHP and JS 
files to run the backend and dynamic content of the site. Finally in style our CSS is placed. 
The HTML and any images plus the DB file are in the root directory.

#### Libraries

The index page holds all references to scripts and stylesheets used for making the page. All current
and future libraries and stylesheets must be added or taken from the index.html page. In order to
keep efficiency, any library referencies removed must also be removed from the
scripts/DataTables/css and /js as well.

#### Database

The database is kept on the AWS server in order to relieve server stress on our physical machines.
Access to the database should be requested from the team database administrator if you have not
done so yet. The database is currently manually updated by the database administrator.

### Functionality

The index.html page hosts all of the references to scripts and stylesheets. Main.js populates the
page with an expandable table to host the data. File.php grabs the data from the database and
populates it into the table, as well as calculates the rank using a SQL script.

### Future Work

The page will have newer, added functionalities, such as the ability to look at previous seasons
power rankings and an updated ranking system that is more consistent and reliable. More regression 
analyses will be done to improve reliability of the ranking system. A CRON script will be created
to pull data automatically weekly in order to improve efficiency and time reliability for ranks to
be posted online. **This portion must be updated with new features and have old ones deleted on a
monthly basis.**
