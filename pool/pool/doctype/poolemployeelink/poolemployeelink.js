// Copyright (c) 2024, Sergey Dobrikov and contributors
// For license information, please see license.txt

// frappe.ui.form.on("PoolEmployeeLink", {
// 	refresh(frm) {

// 	},
// });

//frappe.ui.form.on('PoolEmployeeLink', {
//  onload: function (frm) {
//    console.log("onload formatter test");
//    frappe.form.link_formatters['My Doctype I want to Display'] = function (value, doc) {
//      console.log("onload formatter for my doctype value=" + value + " doc.name=" + doc.name);
//      return value + ":" + doc.name;
//    }
//  }
//});

frappe.form.link_formatters['Employee'] = function(value, doc) {
    console.log("Link formatter test - " + doc.employee_name + " value - " + value);
    console.log(doc);
    if(doc.employee_name && doc.employee_name !== value) {
        return value + ': ' + doc.employee_name;
    } else {
        return value;
    }
}