
function checkAll(e) {
    var checkboxes = document.getElementsByClassName('langg');

    if (e.checked) {
        for (var i = 0; i < checkboxes.length; i++) {
            checkboxes[i].checked = true;
        }
    } else {
        for (var i = 0; i < checkboxes.length; i++) {
            checkboxes[i].checked = false;
        }
    }

}

function checkChange() {

    var totalCheckbox = document.querySelectorAll('input[class="langg"]').length;
    var totalChecked = document.querySelectorAll('input[class="langg"]:checked').length;

    // When total options equals to total checked option
    if (totalCheckbox == totalChecked) {
        document.getElementsByClassName("lang")[0].checked = true;
    } else {
        document.getElementsByClassName("lang")[0].checked = false;
    }

}