// Copyright (c) 2023, srushti prajapati and contributors
// For license information, please see license.txt

frappe.ui.form.on('Client Side Scripting', {
	// refresh: function(frm) {
	// 	// frappe.msgprint("Hello...")
	// 	frappe.throw("This is an error")

	// }
	// validate: function(frm) {
	// 	frm.set_value('full_name',frm.doc.first_name+" "+frm.doc.middle_name+" "+frm.doc.last_name)
	// 	let row = frm.add_child('family_member',{
	// 		name1:'johnson',
	// 		relation:'father',
	// 		age:40
	// 	})
	// }
	
	// enable:function(frm){
	// 	frm.set_df_property('first_name','reqd',1)

	// 	frm.set_df_property('middle_name','read_only',1)

	// 	frm.toggle_reqd('age',true)

	// }

	refresh:function(frm){

		// #####################Single button######################

		// frm.add_custom_button('clicked me',() =>{
		// 	frappe.msgprint(__("My Name Is Srushtii"));
		// })

		// #####################DropDown button######################

		frm.add_custom_button('srushti',() =>{
			frappe.msgprint(__("My Name Is Srushtii"));
		},'Button')

		frm.add_custom_button('om',() =>{
			frappe.msgprint(__("My Name Is Om"));
		},'Button')

		frm.add_custom_button('Raj',() =>{
			frappe.msgprint(__("My Name Is Raj"));
		},'Button')



	}


});
