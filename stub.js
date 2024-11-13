var stack_js = {
get_content: (id) => new Promise((res) => res(document.getElementById(id))),
toggle_visibility: (id) => document.getElementById(id).style.display = "block",
request_access_to_input: (id, bool) => new Promise((res) => res(id)),
switch_content: (id, newcontent) => document.getElementById(id).innerHTML = newcontent,
register_external_button_listener: (btnid, cb) => document.getElementById(btnid).addEventListener("click", (event) => cb())
};
export default stack_js;
