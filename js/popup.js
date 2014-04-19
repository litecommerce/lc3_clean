/* vim: set ts=2 sw=2 sts=2 et: */

/**
 * BlockUI-based popup
 */

// Display a ready-made block element
function lc3_clean_popup_div(id, fade)
{
  popup.open(jQuery('#' + id));
  lc3_clean_postprocess_popup();
}

// Display block message
function lc3_clean_popup_message(data, id)
{
  popup.open(data);
  lc3_clean_postprocess_popup();
}

// Close message box
function lc3_clean_close_popup()
{
  popup.close();
}

// Checks whether it is a Linux Chrome browser
function lc3_clean_is_linux_chrome()
{
 return (navigator.userAgent.toLowerCase().indexOf('chrome') > -1)
    && (navigator.userAgent.toLowerCase().indexOf('linux') > -1);
}

// Postprocess a popup window
function lc3_clean_postprocess_popup()
{
  jQuery('.ui-dialog-content form').each(
    function () {
      this.commonController.backgroundSubmit = false;
    }
  );
}
