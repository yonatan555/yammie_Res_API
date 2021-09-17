Implemented using Express (Node js) framework in VSC.

This API support the 2 next functions: Post and Get
I used MongoDB database to store my data.

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

To run this program type
first: npm i
(for installing packeges)

second: npm start
(for running the server)

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
2 options to execute POST | GET requests,
while the program is running.


POST - Save a new order, and insertion into MongoDB Database 
This tested by PostMan tool by sending Json files to server 
POST REQUEST :  http://localhost3000/api/order/add

Then send json file with these fileds : 

name_order (String) , product (String) , cost (Number) ,cash (Boolean) , date (DD.MM.YYYY) form.

Example : 
{
	"name_order" : "moshe",
	"product" : "pizza",
	"cost" : 120,
	"cash" : true,
	"date" : "14.8.2007"
}
Note : date should be just in this form 13.5.18 ( '.' separation )

GET - for getting all orders from the last day , 
go to website and copy the next line ,for 
GET REQUEST :  http://localhost3000/api/orders
This will pressent the whole orders in last day.

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
