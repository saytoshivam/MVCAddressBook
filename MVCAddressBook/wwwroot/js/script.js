$(document).ready(function () {
    var ContactList = $('#ContactList');
    $.ajax({
        type: 'GET',
        url: "https://localhost:44322/Contacts/GetContacts",
        dataType: 'json',
        success: function (data) {
            console.log(data.length);
            ContactList.empty();
            if (data.length != 0) {
                $.each(data, function (index, contact) {
                    ContactList.append(
                        '<a href="/contacts/details/' + contact.id + '"><div class="new-contact"><h1>' + contact.name + '</h1><p>'
                        + contact.email + '</p><p>' + contact.phoneNumber + '</p></div></a>'
                    );
                });
            } else {
                ContactList.append(' <div class="new-contact"><h1> No Contacts</h1></div >');
            }
        }
    });
});