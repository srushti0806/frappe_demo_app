// Copyright (c) 2023, srushti prajapati and contributors
// For license information, please see license.txt
/* eslint-disable */

frappe.query_reports["Server Side Scripting Script Report"] = {
	"filters": [
		{
			"fieldname":"name",
			"label":__("Server Side Scripting"),
			"fieldtype":"Link",
			"options":"Server Side Scripting"
		},

		{
			"fieldname":"first_name",
			"label":__("DOB"),
			"fieldtype":"Date",	
		},

		{
			"fieldname":"age",
			"label":__("Age"),
			"fieldtype":"Data",
		},


	]
};
