steps:
0. build UI, one with file import and one with category and sku area.
1. identify file to import values
2. import values into array
3. check values against db to see if any exist, create 2 arrays
4. display values of arrays
5. on button press, import healthy array into db
6. create log file of both arrays, named by timestamp and category?

notes.
trying to set catergory on sku that already has category set will throw an error. Magento interface does not have ability to check if already exists so it just does not process, and eventually times out.

this interface will accept values from either an excel file or through its own form, check for preexisting, and then import. Further, it will advise before import which ones are already created and what it will skip. It will then create a log file showing what products were assigned to category and which products it skipped.